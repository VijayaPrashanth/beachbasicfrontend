import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../home/Home";
import ShowBooking from "../showBooking/ShowBooking";
import Login from "../login/Login";
import ProtectedRoute from "../login/ProtectedRoute";
import Booking from "../booking/Booking";
import Shows from "../shows/Shows";

const RootRouter=({isAuthenticated,onLogin})=>{
    return(
        <>
            <Router>
                <Routes>
                    {/* <Route exact path="/" element={<ProtectedRoute element={<Home/>} isAuthenticated={isAuthenticated} />} /> */}
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/login" element={<Login onLogin={onLogin} isAuthenticated={isAuthenticated} />} />
                    <Route exact path="/booking" element={<ProtectedRoute element={<Booking />} isAuthenticated={isAuthenticated} />}/>
                    <Route exact path="/book" element={<ProtectedRoute element={<ShowBooking/>} isAuthenticated={isAuthenticated}/>} />
                    <Route exact path="/shows" element={<ProtectedRoute element={<Shows />} isAuthenticated={isAuthenticated}/>}/>
                    {/* <Route path="/book" element={<ShowBooking />} /> */}
                </Routes>
            </Router>
        </>
    );
}
export default RootRouter;