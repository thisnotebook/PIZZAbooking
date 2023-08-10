import { Link } from "react-router-dom";
function CartOverview() {
  return (
    <div className="bg-stone-800  text-stone-200 uppercase p-4 md:text-base flex items-center justify-between"
    >
      <p className="font-semibold text-stone-200 space-x-4 " >
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" >Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
