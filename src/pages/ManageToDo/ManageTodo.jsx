import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../providers/AuthProvider";
import TaskCard from "./TaskCard";


const ManageTodo = () => {

    const [toDo, setToDo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    const { user } = useContext(authContext);
    const email = user ? user.email : null;
    console.log(email);

    useEffect(() => {
        fetch(`https://task-management-serverside-iota.vercel.app/toDo/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setToDo(data);
                console.log(data); // Log the data inside the callback
            })
            .catch((error) => console.error("Error fetching to-do data:", error));


        fetch(`https://task-management-serverside-iota.vercel.app/ongoing/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setOngoing(data);
                console.log(data); // Log the data inside the callback
            })
            .catch((error) => console.error("Error fetching to-do data:", error));


        fetch(`https://task-management-serverside-iota.vercel.app/completed/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setCompleted(data);
                console.log(data); // Log the data inside the callback
            })
            .catch((error) => console.error("Error fetching to-do data:", error));



    }, [email]);




    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center gap-5 bg-teal-100 py-2">
                <img className="w-20 rounded-full" src={user.photoURL} alt="" />
                <p className="font-bold">{email}</p>
            </div>
            <div className="flex justify-center my-5">
                <Link to={"/addToDo"} className="btn btn-sm font-bold rounded-full bg-teal-400 text-white"><FaPlus></FaPlus></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-teal-100">
                    <h2 className="text-2xl font-bold text-center py-3 border-b-4 border-double border-black">To-Do</h2>
                    <div>
                        {
                            toDo?.map(single_toDo => <TaskCard key={single_toDo._id}
                                single_toDo={single_toDo}
                                toDo={toDo}
                                setToDo={setToDo}
                                completed={completed}
                                setCompleted={setCompleted}
                                ongoing={ongoing}
                                setOngoing={setOngoing}
                            ></TaskCard>)
                        }
                    </div>
                </div>
                <div className="bg-teal-100">
                    <h2 className="text-2xl font-bold text-center py-3 border-b-4 border-double border-black">Ongoing</h2>
                    <div>
                        {
                            ongoing?.map(single_toDo => <TaskCard key={single_toDo._id}
                                single_toDo={single_toDo}
                                toDo={toDo}
                                setToDo={setToDo}
                                completed={completed}
                                setCompleted={setCompleted}
                                ongoing={ongoing}
                                setOngoing={setOngoing}
                            ></TaskCard>)
                        }
                    </div>
                </div>
                <div className="bg-teal-100">
                    <h2 className="text-2xl font-bold text-center py-3 border-b-4 border-double border-black">Completed</h2>
                    <div>
                        {
                            completed?.map(single_toDo => <TaskCard key={single_toDo._id}
                                single_toDo={single_toDo}
                                toDo={toDo}
                                setToDo={setToDo}
                                completed={completed}
                                setCompleted={setCompleted}
                                ongoing={ongoing}
                                setOngoing={setOngoing}
                            ></TaskCard>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageTodo;