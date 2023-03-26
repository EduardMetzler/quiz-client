import { useEffect, useState } from "react";
import { isLogined, userStore } from "../store/userStore";
import axios from 'axios';
import { Link } from "react-router-dom";


const AllQuizMaterialPage: React.FC<any> = () => {
    const [materials, setMaterials] = useState([{ name: "", _id: "" }])

    useEffect(() => {

        axios.defaults.withCredentials = true;
        axios.get(`http://localhost:4000/quizMaterial/all-quiz-material`).then((data) => {
            setMaterials(data.data.materials)
            console.log(data.data.materials)


        }).catch((response) => {
            console.log(response)

        })


    }, [])


    return (
        <>

            {materials.length > 0 ? (
                materials.map((material) => {
                    return <div className="bg-lime-400 m-2 p-5 w-full pointer-events-auto">
                        <Link to={material._id} className="w-full">
                            {material.name}
                        </Link>
                    </div>
                })
            ) : null}




        </>
    );
};

export default AllQuizMaterialPage;

