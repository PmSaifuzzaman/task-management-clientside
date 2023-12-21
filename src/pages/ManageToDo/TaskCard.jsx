import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const TaskCard = ({ single_toDo, toDo, setToDo, completed, setCompleted }) => {
    const{_id, deadline, priority} = single_toDo;

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

                fetch(`http://localhost:5000/task/${_id}`, {
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
                            const remainingTodoTasks = toDo?.filter(single_toDo => single_toDo._id !== _id) 
                            setToDo(remainingTodoTasks)

                            const remainingCompletedTask = completed?.filter(completedTask => completedTask._id !== _id) 
                            setCompleted(remainingCompletedTask)
                            
                            
                            
                        }
                    })
            }
        })
    }

    return (
        <div className="card m-4 bg-white rounded-md shadow-md">
            <div className=" p-4 ">
                <h2 className="card-title">{single_toDo.title}</h2>
                <p>{single_toDo.description}</p>
                <div className='flex items-center justify-between py-2'>
                    <p>Deadline: {deadline}</p>
                    <p>Priority: {priority}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link className=" text-2xl"><FaEdit></FaEdit></Link>
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
    completed: PropTypes.array,
    setCompleted: PropTypes.func,
    

}