import { isLogined, userStore } from "../store/userStore";

const HomePage: React.FC<any> = () => {

  const firstName = userStore(state => state.firstName)
  const isAuthenticate = isLogined(state => state.isAuthenticate)


  return (
    <>

      Home
      <div>  fbfg</div>
      <div>  fbfg</div>
      <div>  fbfg</div>
      <div>  fbfg</div>
      <div>  fbfg</div>



    </>
  );
};

export default HomePage;