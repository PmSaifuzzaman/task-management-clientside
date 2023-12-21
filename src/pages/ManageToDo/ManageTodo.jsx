import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";


const ManageTodo = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center my-5">
                <Link to={"/addToDo"} className="btn btn-sm font-bold rounded-full bg-teal-400 text-white"><FaPlus></FaPlus></Link>
            </div>
           <h2>Manage To do</h2> 
        </div>
    );
};

export default ManageTodo;