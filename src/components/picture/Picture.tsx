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

      <div className="picture__information">

        {/* <h1 className='picture__title'>{photo.title}</h1> */}

        <div className="profile">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E" alt="user profile" className="picture__user" />
          <p className="picture__author">{photo.fullName}</p>
          <p className="picture__created">{updatedDate.toLocaleDateString()}</p>
        </div>

        <p className="picture__region">{photo.region}</p>
        
      </div>
      <img src={photo.url} alt={photo.description} className='picture__img'/>
      <div className="picture__description">
        <h3 className="title">{photo.title}</h3>
        <p className='text'>{photo.description}</p>
      </div>

    </div>
  );
};

export default Picture;
