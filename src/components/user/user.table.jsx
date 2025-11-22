
import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../service/api.service';
import { useEffect, useState } from 'react';
const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([
        { username: "trung", email: "CaoQuoctrung2004@gmial.cm" }]);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'username'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        }

    ];

    useEffect(() => {
        loadAllUser()
    }, []);

    const loadAllUser = async () => {
        // console.log("Start")
        const res = await fetchAllUserAPI()
        // console.log("End", res)
        setDataUsers(res.data)
    }



    return (<Table columns={columns} dataSource={dataUsers} />)
}

export default UserTable;