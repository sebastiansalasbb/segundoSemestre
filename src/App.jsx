import { Outlet } from "react-router-dom";
import Layout from "./Layout/Layout";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Layout>
      <DashboardPage />


    </Layout>
  )
}

export default App;