import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import ErrorPage from "./pages/ErrorPage.jsx";
import AntropologiaPage from "./pages/AntropologiaPage.jsx";
import loaderAntropologia from "./db/loaderAntriopologia.js";
import FinalPage from "./pages/FinalPage.jsx";
import AzureIAPage from "./pages/AzureIAPage.jsx";
import loaderAzureIA from "./db/loaderAzureIA.js";
import MenuIAPage from "./pages/MenuIAPage.jsx";
import AzureCVPage from "./pages/AzureCVPage.jsx";
import loaderAzureCV from "./db/loaderAzureCV.js";
import AzureLNPage from "./pages/AzureLNPage.jsx";
import loaderAzureLN from "./db/loaderAzureLN.js";
import AzureMineriaPage from "./pages/AzureMineriaPage.jsx";
import loaderAzureMineria from "./db/loaderAzureMineria.js";
import AzureIAGPage from "./pages/AzureIAGPage.jsx";
import loaderAzureIAG from "./db/loaderAzureCV.js";
import MatematicasPage from "./pages/MatematicasPage.jsx";
import loaderMatematicas from "./db/loaderMatematicas.js";
import loaderalfabeto from "./db/ingles2/alfabeto/loaderAlfabeto.js"
import AlfabetoPage from "./pages/Ingles_II/AlfabetoPage.jsx";

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
        path: "/matematicas/:nPregunta",
        element: <MatematicasPage />,
        loader: loaderMatematicas,
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
    },
    {
        path: "/menu-azure-ia/unidad-2/:nPregunta",
        element: <AzureCVPage />,
        loader: loaderAzureCV,
        errorElement: <FinalPage />,
    },
    {
        path: "/menu-azure-ia/unidad-3/:nPregunta",
        element: <AzureLNPage />,
        loader: loaderAzureLN,
        errorElement: <FinalPage />,
    },
    {
        path: "/menu-azure-ia/unidad-4/:nPregunta",
        element: <AzureMineriaPage />,
        loader: loaderAzureMineria,
        errorElement: <FinalPage />,
    },
    {
        path: "/menu-azure-ia/unidad-5/:nPregunta",
        element: <AzureIAGPage />,
        loader: loaderAzureIAG,
        errorElement: <FinalPage />,
    },
    {
        path: "/inglesII/alfabeto/:nPregunta",
        element: <AlfabetoPage />,
        loader: loaderalfabeto,
        errorElement: <FinalPage />,
    }

]);

export default router;