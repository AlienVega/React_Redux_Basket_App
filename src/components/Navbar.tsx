import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const Navbar = () => {
  const { quantity } = useSelector((store: RootState) => store.card);

  return (
    <nav>
      <div className="cardNav">
        <h3>Sepet Uygulaması</h3>
        <div className="basket">
          <div className="itemDiv">
            <p>{quantity}</p>
          </div>

          <ShoppingBasketIcon className="itemIcon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
