import Link from "next/link";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import { TbShoppingCart } from "react-icons/tb";

export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const newImage = (
    <img
      className="newImage"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.F-0MbHNtI1eHO3B6o0sYjQHaD4%26pid%3DApi&f=1&ipt=d58641bb88d686fe1515cf245b5ea06ee30eda4977030e86f08e1b5bcf205988&ipo=images"
      alt="newImage"
    />
  );

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">{newImage}</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <TbShoppingCart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
}
