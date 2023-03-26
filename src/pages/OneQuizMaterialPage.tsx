import { useEffect, useState } from "react";
import { isLogined, userStore } from "../store/userStore";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


const OneQuizMaterialPage: React.FC<any> = () => {
    const [material, setMaterial] = useState({ name: "", _id: "", quizMaterial: [{ question: "", correctAnswer: "" }] })
    const { id } = useParams()

    useEffect(() => {

        axios.defaults.withCredentials = true;
        axios.get(`http://localhost:4000/quizMaterial/all-quiz-material/${id}`).then((data) => {
            setMaterial(data.data.material)
            console.log(data.data.material)


        }).catch((response) => {
            console.log(response)

        })


    }, [])


    return (
        <>
            <p className="bg-red-500 m-2 p-5 w-full pointer-events-auto">{material.name}</p>
            {material.quizMaterial.length > 0 ? (
                material.quizMaterial.map((material) => {
                    return <div className="bg-lime-400 m-2 p-5 w-full pointer-events-auto">
                        <div>{material.question}</div>
                        <div>{material.correctAnswer}</div>

                    </div>
                })
            ) : null}




        </>
    );
};

export default OneQuizMaterialPage;

