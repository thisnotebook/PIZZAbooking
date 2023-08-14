import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrize, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utills/helpers";
function CartOverview() {

  const pizzaQuantity = useSelector(getTotalQuantity);
  const TotalCartPrize = useSelector(getTotalPrize)
  if (!pizzaQuantity) return null;


  return (
    <div className="bg-stone-800  text-stone-200 uppercase p-4 md:text-base flex items-center justify-between"
    >
      <p className="font-semibold text-stone-200 space-x-4 " >
        <span>{pizzaQuantity} Pizzas</span>
        <span>${TotalCartPrize}</span>
      </p>
      <Link to="/cart" >Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
