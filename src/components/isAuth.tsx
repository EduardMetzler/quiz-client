import axios from 'axios';
import { isLogined } from "../store/userStore";



export const isAuth = async () => {

    const { isAuthf, setIsAuth } = isLogined();



    // useEffect(() => {
    axios.defaults.withCredentials = true;
    await axios.get(`http://localhost:4000/user/logined`).then((data) => {

        // setIsAuth(data.data)
        // setLogined(true)
        console.log(data.data)
        setIsAuth(data.data)
    }).catch((response) => {

    })
    // }, [])
};