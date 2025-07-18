import styles from './FoodColumns.module.css';
import { Row, Col } from 'react-bootstrap';

function returnFoodDate(food) {
  const { dateFirstEaten, monthFirstEaten, yearFirstEaten } = food;

  if (isNaN(yearFirstEaten)) {
    return yearFirstEaten;
  }

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthName = monthFirstEaten ? monthNames[monthFirstEaten - 1] : '';

  if (dateFirstEaten && monthFirstEaten) {
    const suffix = getDaySuffix(dateFirstEaten);
    return `${dateFirstEaten}${suffix} ${monthName} ${yearFirstEaten}`;
  } else if (monthFirstEaten) {
    return `${monthName} ${yearFirstEaten}`;
  } else {
    return `${yearFirstEaten}`;
  }
}

function getDaySuffix(day) {
  if (day % 10 === 1 && day !== 11) return 'st';
  if (day % 10 === 2 && day !== 12) return 'nd';
  if (day % 10 === 3 && day !== 13) return 'rd';
  return 'th';
}

function FoodColumns({ foodListData }) {
  return (
    <>
      <div className={styles.foodListContainer}>
        <Row className={styles.foodListHeaderRow}>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 3 }}
            className={styles.foodListHeaderColumn}
          >
            <h3>Food Name</h3>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 2 }}
            className={styles.foodListHeaderColumn}
          >
            <h3>Date First Eaten</h3>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 1 }}
            className={styles.foodListHeaderColumn}
          >
            <h3>Rating</h3>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 6 }}
            className={styles.foodListHeaderColumn}
          >
            <h3>Additional Notes</h3>
          </Col>
        </Row>
        {foodListData.map((food, index) => (
          <Row key={index} className={styles.foodListItemRow}>
            <Col
              xs={{ span: 0 }}
              sm={{ span: 3 }}
              className={styles.foodListItemColumn}
            >
              {food.brand && <h4>{food.brand}</h4>} <h4>{food.name}</h4>
            </Col>
            <Col
              xs={{ span: 0 }}
              sm={{ span: 2 }}
              className={styles.foodListItemColumn}
            >
              <h4>
                {returnFoodDate(food)}
              </h4>
            </Col>
            <Col
              xs={{ span: 0 }}
              sm={{ span: 1 }}
              className={styles.foodListItemColumn}
            >
              <h4>{food.rating}</h4>
            </Col>
            <Col
              xs={{ span: 0 }}
              sm={{ span: 6 }}
              className={styles.foodListItemColumn}
            >
              {food.additionalNotes && <h4>{food.additionalNotes}</h4>}
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
}

export default FoodColumns;
