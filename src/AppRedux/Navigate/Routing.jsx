import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormsAddUser from "../FormsAddUser";
import AllUsers from "../AllUsers";
import Forget from "../Forget";

const Routing = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route index element={<FormsAddUser />}/>
                <Route path="/AllUser" element={<AllUsers />}/>
                <Route path="/forgetPass" element={<Forget />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default Routing;