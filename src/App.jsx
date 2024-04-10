import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage.jsx"
import Landing from "./pages/Landing.jsx"
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import Meetings from "./pages/Meetings.jsx"
import Profile from "./pages/Profile.jsx"
import { AuthProvider } from "./contexts/AuthContext.jsx"

function App() {

    return (
        <BrowserRouter>
        <AuthProvider>
            <header>
                <NavBar />
            </header>

            <Routes>
                <Route path="/">
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/meetings" element={<Meetings />} />

                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>

        <Footer />

        </AuthProvider>
        </BrowserRouter>
    )
}

export default App;
