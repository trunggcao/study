
import { Space, Table, Tag } from 'antd';


const UserTable = (props) => {

    const { dataUsers } = props;

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







    return (<Table columns={columns} dataSource={dataUsers} />)
}

export default UserTable;