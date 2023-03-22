import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import routes from "../routes";



const RegisterPage: React.FC<any> = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({

    email: "",
    password: "",



  });

  const isDisabledpointer = () => {
    return form.email.length >= 1 && form.password.length >= 6 ? false : true
  }

  const isDisabledColor = () => {
    return form.email.length >= 1 && form.password.length >= 6 ? "hover:bg-green-500 bg-gray-400" : "bg-gray-200"
  }
  const handleChange = (event: any) => {
    event.preventDefault();
    setForm(prevState => {
      return { ...prevState, [event.target.name]: event.target.value }
    });
  }
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/login", {

        email: form.email,
        password: form.password,

      }, { withCredentials: true });
      navigate("/")
      console.log(response.data)
    } catch (error) {

      console.log(error)
    }

  }
  return (
    <>

      <div className="w-full bg-zinc-50">
        <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
          <div className="w-full overflow-hidden bg-white p-8 shadow-sm dark:bg-gray-800 sm:max-w-md sm:rounded-lg">
            <div className="flex items-center justify-center">

              <Link to={routes[0].path}>
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700">
                  Quiz
                </div>
              </Link>
            </div>

            <form onSubmit={handleSubmit} >



              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" > Email </label>

                <input onChange={handleChange} value={form.email} className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full" type="email" name="email" placeholder="Your email address" />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-400"> Password </label>

                <input onChange={handleChange} value={form.password} className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full" type="password" name="password" placeholder="Your password" />
              </div>


              <div className="mt-4 flex items-center justify-end">

                <Link to={routes[1].path} className="text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-400">
                  Not registered yet ?
                </Link>
                <button disabled={isDisabledpointer()} type="submit" className={`ml-4 inline-flex items-center rounded-lg bg-gray-200 p-2 text-xs font-bold text-gray-800 ${isDisabledColor()} `}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;