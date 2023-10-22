import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "../hooks/useUser";

const NavBar = () =>{
    const {user} = useUser();
    const navigate = useNavigate();
    return(
        <nav className="border-b-4 border-gray-700 flex space-x-8 justify-between">
            <ul className="flex">
                <li className="p-6 text-lg font-bold hover:bg-slate-700 hover:text-white">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-6 text-lg font-bold hover:bg-slate-700 hover:text-white">
                    <Link to="/about">About</Link>
                </li>
                <li className="p-6 text-lg font-bold hover:bg-slate-700 hover:text-white">
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
            <div className="h-auto m-4">
            {user ? <button onClick={()=>{signOut(getAuth())}} className="text-white font-bold bg-slate-700 hover:bg-slate-950 px-2 py-2 rounded-md mr-6 ">Log Out</button>
            :<button onClick={()=>{navigate("/login")}} className="text-white font-bold bg-slate-700 hover:bg-slate-950 px-2 py-2 rounded-md mr-6">Log In</button>}
            </div>
        </nav>
    )
}

export default NavBar;