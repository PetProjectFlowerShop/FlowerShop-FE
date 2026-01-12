import {Routes, Route} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {LoginPage} from "../pages/LoginPage";
import {NotFoundPage} from "../pages/NotFoundPage";
import {MainLayout} from "../layouts/MainLayout";
import {AboutUs} from "../pages/menu-pages/AboutUs";
import {Blog} from "../pages/menu-pages/Blog";
import {Catalog} from "../pages/menu-pages/Catalog";
import {Contacts} from "../pages/menu-pages/Contacts";
import {DeliveryAndPayment} from "../pages/menu-pages/DeliveryAndPayment";
import {Support} from "../pages/legal-links/Support";
import {License} from "../pages/legal-links/License";
import {TermOfService} from "../pages/legal-links/TermOfService";

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
                <Route path="/legal-links/support" element={<Support/>}/>
                <Route path="/legal-links/license" element={<License/>}/>
                <Route path="/legal-links/terms-of-service" element={<TermOfService/>}/>
            </Routes>
        </MainLayout>
    );
}
