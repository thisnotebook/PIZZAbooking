import Button from "../../ui/Button";
import { formatCurrency } from "../../utills/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? " grayscale opacity-70" : " "}`} />
      <div className="ml-2 flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto text-sm uppercase flex  items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className=" text-stone-500">Sold out</p>}
          {soldOut ? null : <Button type="small" >Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
