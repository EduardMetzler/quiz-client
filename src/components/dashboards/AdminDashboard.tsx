import { create } from 'zustand'
import { userStore } from "../../store/userStore";
import { Link, useNavigate } from "react-router-dom";
import routes, { paths } from "../../routes";
import { UserState } from '../../interface/interface';



const AdminDashboard: React.FC<any> = () => {


    const { firstName, setFirstName, role, lastName, } = userStore();
    console.log(firstName)

    return (<>
        AdminDashboard {role}{firstName}{lastName}
        <div>
            <Link to={paths.userListPath} className="">
                All Users
            </Link>
        </div>
        <div>
            <Link to={paths.quizCreatePath} className="">
                New Quiz create
            </Link>

        </div>


    </>);
}

export default AdminDashboard;