import axios from "axios"
import { useState } from "react";
function Register() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')




    let url = "https://admin.srkprojects.com/web/api/client/v1/contact-us/"



    async function AddData() {

        let data = {
            email: email,
            message: message,
            name: name,
        }
        console.log("cli", data)

        await axios.post(url, data)
            .then((response) => {
                console.log(response.data.data, data)

            })
            .catch(() => {
                console.log("error")

            })

    }


    return (
        <div>
            <h3>Add data</h3>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <br />
            <br />
            <input type="text" onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
            <br />
            <br />
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <br />
            <br />
            <button type="submit" onClick={() => { AddData() }}> Submit</button>

        </div>
    )
}
export default Register;

