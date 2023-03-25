import axios from 'axios';
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { paths } from "../../routes";
import { allUserStore, isLogined, userStore } from "../../store/userStore";



const Navbar = () => {

    const allUsers = allUserStore(state => state.allUsers)

    const isAuthenticate = isLogined(state => state.isAuthenticate)
    const setIsAuthenticate = isLogined(state => state.setIsAuthenticate)

    const firstName = userStore(state => state.firstName)
    const setFirstName = userStore(state => state.setFirstName)

    axios.defaults.withCredentials = true;
    async function log() {
        const data = await axios.get(`http://localhost:4000/user/getUser`).then((data) => {
            setFirstName(data.data.user.firstName)
            setIsAuthenticate(true)

        }).catch((response) => {
            setIsAuthenticate(false)

        })
    }
    useEffect(() => {
        log()
    }, [])


    const Links = isAuthenticate ?
        [
            { name: "Home", link: paths.homePath, },
            { name: "Logout", link: "", click: () => setIsAuthenticate(false) },
            { name: "Dashboard", link: paths.dashboardPath, },
        ] :
        [
            { name: "Home", link: paths.homePath, },
            { name: "Login", link: paths.loginPath, },
            { name: "Register", link: paths.registerPath, },
        ];
    let [open, setOpen] = useState(false);
    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div
                    className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
text-gray-800"
                >
                    <NavLink to="/">Quiz</NavLink>

                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    <span>
                        {open ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </span>
                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${open ? "top-19 " : "top-[-490px]"
                        }`}
                >
                    {Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <NavLink onClick={link.click} to={link.link}> {link.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;