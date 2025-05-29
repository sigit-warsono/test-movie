import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-blue-950 text-gray-900">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
