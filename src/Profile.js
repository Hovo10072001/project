import { Button, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { AuthContext } from "./context/UserContext"

const Profile = () => {
    const {btnSubmit, tryLogin, error} = useContext(AuthContext)
    const [form, setform] = useState({
        login: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        btnSubmit(form.login, form.password)
        
    }
    
    return <div>
        <h1>Profile</h1>
        <form onSubmit={handleSubmit}>
            <TextField
                type="text"
				value={form.name}
				onChange={(e) => setform({ ...form, login: e.target.value })}
				label="Login"
			/>
            <br/>
            <br/>
			<TextField
                type="password"
				value={form.surname}
				onChange={(e) => setform({ ...form, password: e.target.value })}
				label="Password"
			/>
            <br/>
            <br/>
			<div>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    </div>


}

export default Profile