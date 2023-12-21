import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { authContext } from "../providers/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    // Desire location to visit
    const visitLocation = useLocation();
    console.log(visitLocation.pathname)

    if (loading) {
        return <span className="loading loading-ring loading-lg text-center"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={visitLocation.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.object,
}