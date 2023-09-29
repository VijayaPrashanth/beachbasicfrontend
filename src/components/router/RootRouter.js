import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../home/Home";

const RootRouter=()=>{
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                </Routes>
            </Router>
        </>
    );
}
export default RootRouter;