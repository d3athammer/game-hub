import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./components/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  { path: "/", element: <Layout />, children: [
    { path: "", element: <HomePage /> },
    { path: "games/:id", element: <GameDetailPage />}
  ] },
]);

export default router;
