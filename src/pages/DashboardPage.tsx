import { useEffect } from 'react';
import { create } from 'zustand'
import axios from 'axios';

import AdminDashboard from '../components/dashboards/AdminDashboard';
import UserDashboard from '../components/dashboards/UserDashboard';
import { userStore } from "../store/userStore";
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC<any> = () => {

    const { firstName, setFirstName, role, setlastName, setRole } = userStore();
    const navigate = useNavigate();


    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`http://localhost:4000/dashboard`).then((data) => {
            setFirstName(data.data.user.firstName)
            setlastName(data.data.user.lastName)
            // console.log(response.data.user.role)
            setRole(data.data.user.role)
            console.log(data)
        }).catch((response) => {
            navigate("/")
            // console.log(response.response.data.message)
        })
    }, [])

    return (<>
        {!role ? "loading" : role === "user" ? <UserDashboard /> : <AdminDashboard />}</>);
}

export default DashboardPage;