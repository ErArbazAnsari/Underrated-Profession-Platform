import "./index.css";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/Header/Jobs.jsx";
import Contact from "./components/Header/Contactus.jsx";
import Hire from "./components/Header/Hire.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="jobs" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="hire" element={<Hire />} />
        </Route>
    )
);

function App() {
    return (
        <div>
            <RouterProvider router={router} />;
        </div>
    );
}

export default App;
