import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  //calling the menuLoader func to get the menu list
  const menu = useLoaderData();
   console.log(menu);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//creating a loader function to get the data from API
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
