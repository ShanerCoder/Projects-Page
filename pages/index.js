import path from "path";
import fs from "fs";
import ListOfFood from "../components/Food List/ListOfFoodComponents/ListOfFood";
import HomePage from "../components/Food List/HomePage";

export default function Home({ foodListData }) {
  return (
    <>
      <HomePage />
      <ListOfFood foodListData={foodListData} />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "foodList.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const foodListData = JSON.parse(jsonData);

  return {
    props: {
      foodListData,
    },
  };
}
