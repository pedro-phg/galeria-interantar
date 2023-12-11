import React from 'react';
import './scss/picture.scss';

type PictureProps = {
  photo: {
    url: string;
    title: string;
    description: string;
    region: string,
    _updatedDate: string,
    fullName: string
  };
};

const Picture: React.FC<PictureProps> = ({ photo }) => {

  const updatedDate: Date = new Date(photo._updatedDate);

  return (
    <div className='picture'>
      <img src={photo.url} alt={photo.description} className='picture__img'/>
    </div>
  );
};

export default Picture;
