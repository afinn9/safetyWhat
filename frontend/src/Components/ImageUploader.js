import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Users/ImgUpload.css';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    document.getElementById('imageInput').click();
  };

  const handleUploadClick = async () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://your-server-url/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="image-upload-container">
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <button onClick={handleButtonClick} className="button">Select Image</button>
      {image && (
        <div>
          <h6>Selected Image: {image.name}</h6>
          <img src={imageUrl} alt="Selected" />
        </div>
      )}
      <button onClick={handleUploadClick} disabled={!image} className="button">Submit Image</button>
    </div>
  );
};

export default ImageUploader;
