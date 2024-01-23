import React from 'react';
import '../styles/CustomSpinner.css';

const CustomLoader = () => {
  return (
    <div className="custom-spinner-container">
      <div className="custom-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CustomLoader;
