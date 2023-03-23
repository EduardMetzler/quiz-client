import { create } from 'zustand'
import { userStore } from "../../store/userStore";

const UserDashboard: React.FC<any> = () => {

    const { firstName, setFirstName, role, lastName } = userStore();
    // console.log(firstName)

    return (<>
        UserDashboard {role}{firstName}{lastName}</>);
}

export default UserDashboard;