import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import PageDetail1 from '../Pages/PageDetail1';
import PageDetail2 from '../Pages/PageDetail2';
import UrlParameter from "../Pages/UrlParameter";
import Page404 from "../Pages/Page404";

export const Router = () => {
    return (
        <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/page1`} >
                <Route index={true} element={<Page1 />} />
                <Route path={`/page1/detail1`} element={<PageDetail1 />} />
                <Route path={`/page1/detail2`} element={<PageDetail2 />} />
            </Route>
            <Route path={`/page2`} >
                <Route index={true} element={<Page2 />} />
                <Route path={`/page2/:id`} element={<UrlParameter />} />
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}
