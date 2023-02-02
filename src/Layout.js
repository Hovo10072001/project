import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return <div id="header">
         <nav>
              <h2><Link to="/profile">Profile</Link></h2>
              <h2> <Link to="/news">News</Link></h2>

         </nav>
         <div>
              <Outlet/>
         </div>
    </div>
}

export default Layout