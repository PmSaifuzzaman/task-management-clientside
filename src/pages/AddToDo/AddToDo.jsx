import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "react-hook-form"
import { authContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
// aos animation
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const AddToDo = () => {

    const { user } = useContext(authContext);
    const email = user ? user.email : null;


    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Added Successfully',
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
                        <input type="text" placeholder="Task title" className="input input-bordered w-full max-w-xs" {...register("title")} />
                        <input type="date" placeholder="Deadline" className="input input-bordered w-full max-w-xs" {...register("deadline")} />
                    </div>
                    <div>
                        <textarea placeholder="Task description" className="input input-bordered w-full max-w-lg" {...register("description")} />
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
                            <select {...register("status")} className="select select-bordered ">
                                <option value="to-do">to-do</option>
                                <option value="ongoing">ongoing</option>
                                <option value="completed">completed</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <input className="input input-bordered w-full max-w-xs" type="email"  {...register("email", { required: true })} defaultValue={email} readOnly />
                    </div>
                    <button className="btn w-full bg-teal-400 text-white" type="submit">Add Task</button>
                </form>
            </div>

        </div>
    );
};

export default AddToDo;