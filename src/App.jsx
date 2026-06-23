import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import ProductPage from '@/pages/ProductPage';
import Consulting from '@/pages/Consulting';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}
