import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { RootState } from "../store";
import { clearCard } from "../control/cardSlice";
const CourseList = () => {
  const dispatch = useDispatch();
  const { cardItems, quantity, total } = useSelector(
    (store: RootState) => store.card
  );
  return (
    <>
      {quantity < 1 ? (
        <section className="card">
          <header>
            <h2>sepetim</h2>
            <h4>boş</h4>
          </header>
        </section>
      ) : (
        <section className="card">
          <header>
            <h2>sepetim</h2>
          </header>
          <div>
            {cardItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button
              className="clearButton"
              onClick={() => dispatch(clearCard())}
            >
              Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
