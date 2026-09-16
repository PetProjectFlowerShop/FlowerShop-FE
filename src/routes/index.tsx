import { Route, Routes } from 'react-router-dom';

import { AuthLayout } from '../layouts/AuthLayout';
import { MainLayout } from '../layouts/MainLayout';

import { ProtectedRoute } from './ProtectedRoute';

import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProductPage } from '../pages/ProductPage';

import { License } from '../pages/legal-links/License';
import { Support } from '../pages/legal-links/Support';
import { TermOfService } from '../pages/legal-links/TermOfService';

import { AboutUs } from '../pages/menu-pages/AboutUs';
import { Blog } from '../pages/menu-pages/Blog';
import { Catalog } from '../pages/menu-pages/Catalog';
import { Contacts } from '../pages/menu-pages/Contacts';
import { DeliveryAndPayment } from '../pages/menu-pages/DeliveryAndPayment';

import { MyProfile } from '../pages/MyProfile';
import { OrderHistory } from '@/pages/user/OrderHistory';
import { Favorites } from '@/pages/user/Favorites';
import { Settings } from '@/pages/user/Settings';

import { Navigate } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      {/* Layout route */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<ProductPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delivery-and-payment" element={<DeliveryAndPayment />} />

        <Route path="/legal-links/support" element={<Support />} />
        <Route path="/legal-links/license" element={<License />} />
        <Route path="/legal-links/terms-of-service" element={<TermOfService />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<Navigate to="/my-profile" replace />} />

          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/user/order-history" element={<OrderHistory />} />
          <Route path="/user/favorites" element={<Favorites />} />
          <Route path="/user/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route element={<AuthLayout />}></Route>
    </Routes>
  );
}
