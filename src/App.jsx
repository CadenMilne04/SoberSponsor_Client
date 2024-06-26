import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage.jsx"
import Landing from "./pages/Landing.jsx"
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import Meetings from "./pages/Meetings.jsx"
import Profile from "./pages/Profile.jsx"
import { AuthProvider } from "./contexts/AuthContext.jsx"
import Journal from "./pages/Journal.jsx"
import Tracker from "./pages/Tracker.jsx"
import Contacts from "./pages/Contacts.jsx"

function App() {

    return (
        <BrowserRouter>
    <AuthProvider>
        <div className="flex flex-col min-h-screen">
            <header>
                <NavBar />
            </header>

            <main className="h-80vh overflow-y-hidden">

                <div className="flex-grow flex-shrink overflow-y-hidden">
                    <Routes>
                        <Route path="/">
                            <Route path="/" element={<Landing />} />
                            <Route path="/home" element={<Homepage />} />
                            <Route path="/meetings" element={<Meetings />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/journal" element={<Journal />} />
                            <Route path="/tracker" element={<Tracker />} />
                            <Route path="/contacts" element={<Contacts />} />
                        </Route>
                    </Routes>
                </div>
            </main>

            <Footer />
        </div>
    </AuthProvider>
</BrowserRouter>

    
    )
}

export default App;
