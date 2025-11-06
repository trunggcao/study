import { Input } from "antd";
import { Button } from "antd";
import { useState } from "react";
import axios from "axios";


const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");


    const hanldeBtnClick = () => {
        const URL_BACKEND = "http://localhost:7070/api/v1/user";
        const token = "JUSTARANDOMSTRINGACCESS";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone
        }
        axios.post(URL_BACKEND, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log({ fullName, email, password, phone })
    }
    return (

        <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "20px" }}>
                <Input placeholder="Full Name"
                    value={fullName}
                    onChange={(event) => { setFullName(event.target.value) }} />
                <Input placeholder="Email"
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }} />
                <Input.Password placeholder="Password"
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }} />
                <Input placeholder="Phone Number"
                    value={phone}
                    onChange={(event) => { setPhone(event.target.value) }} />
            </div >
            <Button type="primary" style={{ margin: "10px" }}
                onClick={() => { hanldeBtnClick() }}>Create User</Button>
        </div>
    )
}

export default UserForm;