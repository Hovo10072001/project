import React, { useState } from "react"

export const AuthContext = React.createContext()

export const UserContextProvider = (props) => {

    const [users, setUsers] = useState({
        login: "Hovo001",
        password: "hovo2001"
    })
    const [error, setError] = useState("")
    const tryLogin = (login, password) => {
        const temp = users.find(elm => elm.login === login)

        console.log(login, password,temp)
        if(!temp){
            setError("Login is wrong")
        }else if(temp.password != password){
            setError("Password is wrong")
        }else{
            setError("")
        }
    }
    const btnSubmit = (login, password) => {
        console.log(login, password)
        
        if(!login || !password){
            setError("Please fill all he fields")
        }else if(password.length <= 6){
            setError("password is short")
        }else{
            console.log("ok")
            setUsers(
                [...users, {login, password}]
            )
        }   
    }

    return <AuthContext.Provider value={{tryLogin, btnSubmit}}>
        {props.children}
    </AuthContext.Provider>
}