import axios from 'axios';
import { useEffect } from 'react';
import { allUserStore } from "../store/userStore";
import { Link, useNavigate } from "react-router-dom";






const UserListPage: React.FC<any> = () => {
    const { allUsers, setAllUsers } = allUserStore();
    const navigate = useNavigate();




    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`http://localhost:4000/user/userList`).then((data) => {
            // setFirstName(data.data.user.firstName)
            // setlastName(data.data.user.lastName)
            // // console.log(response.data.user.role)
            // setRole(data.data.user.role)
            console.log(data.data.allUsers)
            setAllUsers(data.data.allUsers)
            console.log(allUsers)
        }).catch((response) => {
            navigate("/")
            // console.log(response.response.data.message)
        })
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