// aos animation
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { authContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Navbar from '../../components/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
// import PropTypes from 'prop-types';


const UpdateToDo = () => {

    const { user } = useContext(authContext);
    const email = user ? user.email : null;

    // // load single task
    const singleTask = useLoaderData();
    const{_id, title, deadline, description, status} = singleTask;




    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        fetch(`https://task-management-serverside-iota.vercel.app/myTask/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            });
        
    }

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" data-aos="zoom-in-up">
                    <div className="flex gap-5">
                        <input type="text" placeholder="Task title" className="input input-bordered w-full max-w-xs" {...register("title")}  defaultValue={title}/>
                        <input type="date" placeholder="Deadline" className="input input-bordered w-full max-w-xs" {...register("deadline")} defaultValue={deadline}/>
                    </div>
                    <div>
                        <textarea placeholder="Task description" className="input input-bordered w-full max-w-lg" {...register("description")} defaultValue={description} />
                    </div>
                    <div className="flex gap-5">
                        <div >
                            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                                Task Priority
                            </label>
                            <select {...register("priority")} className="select select-bordered ">
                                <option value="low">low</option>
                                <option value="moderate">moderate</option>
                                <option value="high">high</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                Task Status
                            </label>
                            <select {...register("status")} className="select select-bordered " defaultValue={status}>
                                <option value="to-do">to-do</option>
                                <option value="ongoing">ongoing</option>
                                <option value="completed">completed</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <input className="input input-bordered w-full max-w-xs" type="email"  {...register("email", { required: true })} defaultValue={email} readOnly />
                    </div>
                    <button className="btn w-full bg-teal-400 text-white" type="submit">Update Task</button>
                </form>
            </div>

        </div>
    );
};

export default UpdateToDo;

// UpdateToDo.propTypes = {
//     single_toDo: PropTypes.object,
// }