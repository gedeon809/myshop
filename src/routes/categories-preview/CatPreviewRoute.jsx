import React, { Fragment, useContext } from 'react';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../../components/category-preview/CategoryPreview';

const CatPreviewRoute = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CatPreviewRoute;
