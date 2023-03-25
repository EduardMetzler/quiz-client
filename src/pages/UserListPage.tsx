import axios from 'axios';
import { useEffect } from 'react';
import { allUserStore, userStore } from "../store/userStore";
import { Link, useNavigate } from "react-router-dom";
import { paths } from '../routes';






const UserListPage: React.FC<any> = () => {
    const role = userStore(state => state.role)

    const allUsers = allUserStore(state => state.allUsers)
    const setAllUsers = allUserStore(state => state.setAllUsers)

    const navigate = useNavigate();




    useEffect(() => {
        if (role !== "admin") {
            console.log(role)



            navigate(paths.loginPath)

        } else {
            axios.defaults.withCredentials = true;
            axios.get(`http://localhost:4000/user/userList`).then((data) => {

                console.log(data.data.allUsers)
                setAllUsers(data.data.allUsers)
                console.log(allUsers)
            }).catch((response) => {
                navigate("/")

            })
        }

    }, [])



    return (
        <>


            {allUsers.length === 0 ? "Loading" : allUsers.map((user) => {
                return <div key={user._id}>     <Link to={"/routes[4].path"} className="">
                    {user._id}
                </Link></div>
            })}

        </>
    );
};

export default UserListPage;