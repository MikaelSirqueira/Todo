import { BrowserRouter, Route, Routes } from "react-router";
import PagesComponents from "./pages/pages-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/componentes" element={<PagesComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
