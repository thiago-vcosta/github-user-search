import React from 'react';
import ImageLoader from '../components/Loaders/ImageLoader';
import InfoLoader from '../components/Loaders/InfoLoader';
import './styles.css';

const ObjLoaders = () => (
  <div className="loader-content">
    <div className="image-loader">
      <ImageLoader />
    </div>
    <div className="info-loader">
      <InfoLoader />
    </div>
  </div>
)

export default ObjLoaders;
