import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from "../service/api.service";

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        loadAllUser()
    }, []);

    const loadAllUser = async () => {
        // console.log("Start")
        const res = await fetchAllUserAPI()
        // console.log("End", res)
        setDataUsers(res.data)
    }

    return (

        <div>
            <UserForm loadAllUser={loadAllUser} />
            <UserTable dataUsers={dataUsers} />
        </div>
    )
}

export default UserPage