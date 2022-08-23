import { Routes, Route } from 'react-router-dom';
import './shopComponent.scss';
import CatPreviewRoute from '../categories-preview/CatPreviewRoute';
import CategoryComponent from '../category/CategoryComponent';

const ShopComponent = () => {
  return (
    <Routes>
      <Route index element={<CatPreviewRoute />} />
      <Route path=":category" element={<CategoryComponent />} />
    </Routes>
  );
};

export default ShopComponent;
