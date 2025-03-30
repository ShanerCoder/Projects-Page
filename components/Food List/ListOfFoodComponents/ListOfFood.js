import { useState, useMemo } from "react";
import FoodColumns from "./FoodColumns";
import styles from "./ListOfFood.module.css";

function ListOfFood({ foodListData }) {
  const [filterByDate, setFilterByDate] = useState("All Dates");
  const [filterByBrand, setFilterByBrand] = useState("All Brands");
  const [searchTerm, setSearchTerm] = useState("");

  const uniqueDates = useMemo(() => {
    const dates = new Set(foodListData.map((food) => food.dateFirstEaten));

    const sortedDates = [...dates].sort((a, b) => {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);

      if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
      if (!isNaN(numA)) return -1;
      if (!isNaN(numB)) return 1;
      return a.localeCompare(b);
    });

    return ["All Dates", ...sortedDates];
  }, [foodListData]);

  const uniqueBrands = useMemo(() => {
    const brands = new Set(
      foodListData
        .map((food) => food.brand)
        .filter((brand) => brand && brand.trim() !== "")
    );
    return ["All Brands", ...brands];
  }, [foodListData]);

  const filteredFoodList = useMemo(() => {
    const filtered = foodListData.filter((food) => {
      const lowerSearch = searchTerm.toLowerCase();

      const matchesSearch =
        food.name.toLowerCase().includes(lowerSearch) ||
        (food.brand && food.brand.toLowerCase().includes(lowerSearch));

      const matchesDate =
        filterByDate === "All Dates" || food.dateFirstEaten === filterByDate;
      const matchesBrand =
        filterByBrand === "All Brands" || food.brand === filterByBrand;

      return matchesSearch && matchesDate && matchesBrand;
    });

    return filtered.sort((a, b) => {
      const numA = parseInt(a.dateFirstEaten, 10);
      const numB = parseInt(b.dateFirstEaten, 10);

      if (!isNaN(numA) && !isNaN(numB)) {
        if (numB !== numA) return numB - numA;
      } else if (!isNaN(numA)) {
        return -1;
      } else if (!isNaN(numB)) {
        return 1;
      }

      const ratingA = a.rating ?? 0;
      const ratingB = b.rating ?? 0;
      return ratingB - ratingA;
    });
  }, [foodListData, searchTerm, filterByDate, filterByBrand]);

  return (
    <>
      <h1 className={styles.header}>List of foods I have eaten:</h1>
      <p className={styles.note}>Note: List not final I hope</p>
      <div>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search for food or brand..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={filterByDate}
          className={styles.filterInput}
          onChange={(e) => setFilterByDate(e.target.value)}
        >
          {uniqueDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>

        <select
          value={filterByBrand}
          className={styles.filterInput}
          onChange={(e) => setFilterByBrand(e.target.value)}
        >
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <FoodColumns foodListData={filteredFoodList} />
    </>
  );
}

export default ListOfFood;
