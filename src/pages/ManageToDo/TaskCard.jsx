import PropTypes from 'prop-types';

const TaskCard = ({ single_toDo }) => {
    console.log(single_toDo)
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{single_toDo.title}</h2>
                <p>{single_toDo.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;

TaskCard.propTypes = {
    single_toDo: PropTypes.object,

}