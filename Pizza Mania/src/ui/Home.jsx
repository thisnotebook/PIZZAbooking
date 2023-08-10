import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="text-center py-4">
      <h1 className="text-3xl  text-stone-700 font-semibold ms:text-base sm:my-14 ">
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
