import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { isLogined, userStore } from "../store/userStore";
import { paths } from "../routes";


const QuizCreatePage: React.FC<any> = () => {
    const navigate = useNavigate();
    const setIsAuthenticate = isLogined(state => state.setIsAuthenticate)
    const isAuthenticate = isLogined(state => state.isAuthenticate)

    const role = userStore(state => state.role)



    const [quizForm, setQuizForm] = useState(
        {
            name: "sw",
            quizMaterial: [

                { question: "sw", correctAnswer: "dw" },
                { question: "wd", correctAnswer: "wd" },
                { question: "wd", correctAnswer: "wd" },
                { question: "wd", correctAnswer: "dw" }



            ]
        }
    )



    const handleChange = (event: any, i: any) => {
        event.preventDefault();
        if (i === "name") {
            setQuizForm(prevState => {
                return { ...prevState, name: event.target.value }
            });
        } else {
            const array = quizForm.quizMaterial
            const newArray = array.map((item, index) => {
                return index === i ? { ...item, [event.target.name]: event.target.value }
                    : item
            })
            setQuizForm(prevState => {
                return { ...prevState, quizMaterial: newArray }
            });


        }


    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/quizMaterial/create", {
                ...quizForm


            }, { withCredentials: true });


            navigate(paths.loginPath)

            console.log(response.data)
        } catch (error) {

            console.log(error)
        }

    }

    useEffect(() => {
        if (role !== "admin") {
            console.log(role)



            navigate(paths.loginPath)

        }
    }, [])


    return (
        <>


            <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-6 group">
                    <input value={quizForm.name} onChange={(event) => handleChange(event, "name")} type="text" name="question" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Question</label>
                </div>
                {quizForm.quizMaterial.map((obj, i) => {
                    return <div key={i} >
                        <p className="mb-2">Question {i + 1}</p>
                        <div className="relative w-full mb-6 group">
                            <input value={quizForm.quizMaterial[i].question} onChange={(event) => handleChange(event, i)} type="text" name="question" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Question</label>
                        </div>
                        <div className="relative w-full mb-6 group">
                            <input value={quizForm.quizMaterial[i].correctAnswer} onChange={(event) => handleChange(event, i)} type="text" name="correctAnswer" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correct Answer</label>
                        </div>
                    </div>
                })}

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>


        </>
    );
};

export default QuizCreatePage;