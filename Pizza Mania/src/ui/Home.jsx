import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector(state => state.user.username);
  return (
    <div className="text-center py-4">
      <h1 className="text-3xl  text-stone-700 font-semibold ms:text-base sm:my-14 ">
        The best pizza.
        <br />
        <span className="text-yellow-500" >
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName ? <Button to="/menu" type="primary">{`Continue Ordering ${userName}`} </Button> : <CreateUser />}
    </div>
  );
}

export default Home;
