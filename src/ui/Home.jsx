import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  //We can read data from the store with useSelector, and dispatch actions using useDispatch.
  const username = useSelector(state=>state.user.username);

  return (
    <div className="text-center my-10 sm:my-15 px-4">
      <h1 className="text-xl font-semibold mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? <CreateUser /> : <Button to="/menu">keep Ordering, {username}</Button>}
    </div> 
  );
}

export default Home;
 