import React from 'react';
import DirectoryItem from '../components/directory-item/DirectoryItem';
import './directory.styles.scss';

const DirectoryComponent = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryComponent;
