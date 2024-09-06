import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import ErrorPage from "./pages/ErrorPage.jsx";
import AntropologiaPage from "./pages/AntropologiaPage.jsx";
import loaderAntropologia from "./db/loaderAntriopologia.js";
import FinalPage from "./pages/FinalPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/antropologia/:nPregunta",
        element: <AntropologiaPage />,
        loader: loaderAntropologia,
        errorElement: <FinalPage />,
    }
]);

export default router;