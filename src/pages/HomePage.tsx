import { isLogined, userStore } from "../store/userStore";

const HomePage: React.FC<any> = () => {

  const firstName = userStore(state => state.firstName)
  const isAuthenticate = isLogined(state => state.isAuthenticate)


  return (
    <>

      Home




    </>
  );
};

export default HomePage;