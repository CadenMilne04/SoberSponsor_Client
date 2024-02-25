import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage.jsx"
import Register from "./pages/Register.jsx"
import Landing from "./pages/Landing.jsx"


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Homepage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
