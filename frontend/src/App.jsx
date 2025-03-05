import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landingpage from './pages/Landing';
import Dashboard from './pages/Dashboard';

export default function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    )
}