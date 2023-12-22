import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const TaskCard = ({ single_toDo, toDo, setToDo, ongoing, setOngoing, completed, setCompleted,  }) => {
    const { _id, deadline, priority } = single_toDo;

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://task-management-serverside-iota.vercel.app/task/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Task has been deleted.',
                                'success'
                            )
                            // Remove immidietly from ui
                            const remainingTodoTasks = toDo?.filter(single_toDo => single_toDo._id !== _id)
                            setToDo(remainingTodoTasks)

                            const remainingOngoingTasks = ongoing?.filter(ongoing_toDo => ongoing_toDo._id !== _id)
                            setOngoing(remainingOngoingTasks)

                            const remainingCompletedTask = completed?.filter(completedTask => completedTask._id !== _id)
                            setCompleted(remainingCompletedTask)



                        }
                    })
            }
        })
    }
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="card m-4 bg-white rounded-md shadow-md" data-aos="zoom-in">
            <div className=" p-4 ">
                <h2 className="card-title">{single_toDo.title}</h2>
                <p>{single_toDo.description}</p>
                <div className='flex items-center justify-between py-2'>
                    <p>Deadline: {deadline}</p>
                    <p>Priority: {priority}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/updateToDo/${_id}`} className=" text-2xl"><FaEdit></FaEdit></Link>
                    <button onClick={() => handleDelete(_id)} className='text-2xl'><FaTrash></FaTrash></button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;

TaskCard.propTypes = {
    single_toDo: PropTypes.object,
    toDo: PropTypes.array,
    setToDo: PropTypes.func,
    ongoing: PropTypes.array,
    setOngoing: PropTypes.func,
    completed: PropTypes.array,
    setCompleted: PropTypes.func,


}