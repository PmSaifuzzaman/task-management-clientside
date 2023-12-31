import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import userDefaultPhoto from "../../assets/users/user.png"



const Navbar = () => {
    // Access Context api
    const { logOut, user } = useContext(authContext);

    const email = user ? user.email : null;
    console.log(email)

    const auth = getAuth()

    // Log out messege
    const handleLogOut = () => {
        logOut(auth)
            .then(() => {
                alert('Log out Successfully')
            })
            .catch(() => {
                alert('Cannot log out')
            })
    }
    return (
        <div className="navbar  px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-teal-400 underline font-medium" : ""
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutUs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-teal-400 underline font-medium" : ""
                                }>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/addToDo"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-teal-400 underline font-medium" : ""
                                }>
                                Add To-Do
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/manageToDo"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-teal-400 underline font-medium" : ""
                                }>
                                Manage My To-Do
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <Link><h2 className="text-2xl font-bold">Task<span className="text-teal-400">Pilot</span></h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-teal-400 underline font-medium" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutUs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-teal-400 underline font-medium" : ""
                            }>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/AddToDo"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-teal-400 underline font-medium" : ""
                            }>
                            Add To-Do
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/manageToDo"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-teal-400 underline font-medium" : ""
                            }>
                            Manage My To-Do
                        </NavLink>
                    </li>

                </ul>
            </div>
            
            <div className="navbar-end">
                {
                    user && <p className="font-semibold hidden md:block">{user?.email}</p>
                }
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div >
                        {
                            user ? <div>
                                <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                            </div>
                                :
                                <img src={userDefaultPhoto} />
                        }
                    </div>
                </label>
                {
                    user ? <button onClick={handleLogOut} className="btn">LogOut</button>
                        :
                        <Link className="btn" to={"/login"}>Login</Link>
                }

            </div>
            
        </div>
    );
};

export default Navbar;