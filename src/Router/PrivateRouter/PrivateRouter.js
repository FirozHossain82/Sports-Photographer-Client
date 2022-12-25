
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext);
    const location  = useLocation();

    if (loading) {
        return <div className="text-center">
            <h1>Loading...</h1>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;