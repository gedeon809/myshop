import { createContext, useState, useEffect } from 'react';

import { getCatAndDocs } from '../utils/firebase/firebaseUtils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // used to fire data into my firestore
  /* useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA);
  }, []); */
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCatAndDocs();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
