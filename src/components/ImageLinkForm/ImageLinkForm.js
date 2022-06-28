import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return(
    <div>
      <p className="f4"> {'This feature will detect faces in pictures. Paste a link from an imagem with a face to give it a try'} </p>
      <p className="f6"> {'It doesn\'t work for base64 image links.'} </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className='f4 pa2 w-70 center br2' type='text' onChange={onInputChange} />
          <button 
            className="w-30 grow f4 link pv dib white bg-gray br3"
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm