import React from 'react';
import { Thumbnail, Image } from 'react-bootstrap/lib';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';

export default function Cast({cast}) {
  const print = () =>{ // was an onClick in p tag
    console.log(URL_IMG+IMG_SIZE_SMALL+cast.profile_path)
  }

  return (
    <div>
    <Image  src={URL_IMG+IMG_SIZE_SMALL+cast.profile_path}  rounded alt={cast.name}  />
      <p>{cast.name}</p>
    </div>
    
  );
}

Cast.propTypes = {
  cast: React.PropTypes.shape({
    profile_path: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  })
};
