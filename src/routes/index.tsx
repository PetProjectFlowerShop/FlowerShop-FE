import {Routes, Route} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {LoginPage} from "../pages/LoginPage";
import {NotFoundPage} from "../pages/NotFoundPage";
import {MainLayout} from "../layouts/MainLayout";
import {AboutUs} from "../pages/AboutUs";
import {Blog} from "../pages/Blog";
import {Catalog} from "../pages/Catalog";
import {Contacts} from "../pages/Contacts";
import {DeliveryAndPayment} from "../pages/DeliveryAndPayment";

export function AppRoutes() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/delivery-and-payment" element={<DeliveryAndPayment/>}/>
            </Routes>
        </MainLayout>
    );
}
