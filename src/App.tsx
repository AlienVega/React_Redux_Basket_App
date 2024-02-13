import "./App.css";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { RootState } from "./store";
import { useEffect } from "react";
import { calculateTotal } from "./control/cardSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { cardItems } = useSelector((store: RootState) => store.card);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cardItems]);
  return (
    <>
      <Navbar />
      <CourseList />
    </>
  );
}

export default App;
