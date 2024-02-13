import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { courses } from "../CourseItem";
import { useDispatch } from "react-redux";
import { removeItem, increment, decrease } from "../control/cardSlice";
const CourseItem: React.FC<courses> = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="cardItem">
      <img className="imglist" src={img} alt="" />
      <div className="cardInfo">
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div>
          <button
            className="countbutton"
            onClick={() => {
              dispatch(increment(id));
            }}
          >
            <ExpandLessIcon />
          </button>
          <p className="countp">{quantity}</p>
          <button
            className="countbutton"
            onClick={() => {
              dispatch(decrease(id));
            }}
          >
            <KeyboardArrowDownIcon />
          </button>
        </div>
        <button
          className="clearButton"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
