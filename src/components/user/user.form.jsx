import { Input, Button, notification, Modal } from "antd";
import { useState } from "react";
import { CreateUserAPI } from "../../service/api.service";



const UserForm = (props) => {


    const { loadAllUser } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setUsername("");
        setEmail("");

    }


    const hanldeBtnClick = async () => {
        const res = await CreateUserAPI(email, username)
        if (res.data) {
            api.success({
                message: "Create user",
                description: "Create success"
            })
            resetAndCloseModal()
            await loadAllUser();
        } else {
            api.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }

        console.log("check res: ", res)
    }
    return (

        <div>
            {contextHolder}
            <Button type="primary" style={{ margin: "10px" }}
                onClick={showModal}>Create User</Button>
            <Modal
                title="Create User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => { hanldeBtnClick() }}
                onCancel={handleCancel}
                maskClosable={false}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "20px" }}>
                    <Input placeholder="Full Name"
                        value={username}
                        onChange={(event) => { setUsername(event.target.value) }} />
                    <Input placeholder="Email"
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }} />

                </div >
            </Modal>
        </div>
    )
}

export default UserForm;