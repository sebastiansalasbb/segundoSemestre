import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import ErrorPage from "./pages/ErrorPage.jsx";
import AntropologiaPage from "./pages/AntropologiaPage.jsx";
import loaderAntropologia from "./db/loaderAntriopologia.js";
import FinalPage from "./pages/FinalPage.jsx";
import AzureIAPage from "./pages/AzureIAPage.jsx";
import loaderAzureIA from "./db/loaderAzureIA.js";
import MenuIAPage from "./pages/MenuIAPage.jsx";

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
    },
    {
        path: "/menu-azure-ia/",
        element: <MenuIAPage />,

    },
    {
        path: "/menu-azure-ia/unidad-1/:nPregunta",
        element: <AzureIAPage />,
        loader: loaderAzureIA,
        errorElement: <FinalPage />,
    }
]);

export default router;