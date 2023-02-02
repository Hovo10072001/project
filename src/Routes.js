import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import News from "./News"
import Profile from "./Profile"

const MyRoutes = () => {
    return <BrowserRouter>
               <Routes>
                    <Route path="" element={<Layout/>}>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Route>
               </Routes>
     </BrowserRouter>
} 

export default MyRoutes