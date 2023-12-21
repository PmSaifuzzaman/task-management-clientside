import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "react-hook-form"


const AddToDo = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex gap-5">
                        <input type="text" placeholder="Task title" className="input input-bordered w-full max-w-xs" {...register("title")} />
                        <input type="date" placeholder="Deadline" className="input input-bordered w-full max-w-xs" {...register("deadline")} />
                    </div>
                    <div>
                        <textarea placeholder="Task description" className="input input-bordered w-full max-w-lg" {...register("description")} />
                    </div>
                    <div className="flex gap-5">
                        <select {...register("priority")} className="select select-bordered w-full max-w-xs">
                            <option value="low">low</option>
                            <option value="moderate">moderate</option>
                            <option value="high">high</option>
                        </select>
                        <select {...register("status")} className="select select-bordered w-full max-w-xs">
                            <option value="to-do">to-do</option>
                            <option value="ongoing">ongoing</option>
                            <option value="completed">completed</option>
                        </select>
                    </div>
                    <button className="btn w-full bg-teal-400 text-white" type="submit">Add Task</button>
                </form>
            </div>

        </div>
    );
};

export default AddToDo;