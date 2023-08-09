import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="text-center my-8">
      <h1 className="text-2xl  text-stone-700 font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500" >
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
