import { Outlet } from "react-router-dom";
import Layout from "./Layout/LayoutContainer";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Layout>
      <DashboardPage />


    </Layout>
  )
}

export default App;