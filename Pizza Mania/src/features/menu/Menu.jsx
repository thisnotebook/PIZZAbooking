import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";


export async function loader() {
  const menu = await getMenu();
  return menu;
}
function Menu() {
  const menu = useLoaderData()
  return (
    <div>
      <h1>Menu</h1>
      {menu.map(pizza => <MenuItem pizza={pizza} key={pizza.id} />)}
    </div>)

}

export default Menu;
