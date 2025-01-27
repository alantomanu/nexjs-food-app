"use client"; // This line makes the component a Client Component

import React, { useState } from 'react'; // Import useState for managing state
import styles from './image-picker.module.css'; // Import the CSS module

const ImagePicker = ({ className }: { className?: string }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for the selected image

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
      setSelectedImage(imageUrl); // Update the state with the image URL
      console.log('Selected image:', file);
    }
  };

  return (
    <div className={`${styles.imagePicker} ${styles.customStyles} ${className}`}> {/* Apply food-themed styles and custom class */}
      <label htmlFor="image" className={styles.label}>Pick an Image:</label> {/* Apply styles to label */}
      <input type="file" id="image" accept="image/*" onChange={handleImageChange} className={styles.input} /> {/* Apply styles to input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> {/* Flex container for alignment with gap */}
        {selectedImage && (
          <>
            <img 
              src={selectedImage} 
              alt="Selected Preview" 
              className={styles.preview} 
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} // Style for image
            />
            <button 
              onClick={() => document.getElementById('image')?.click()} 
              className={styles.uploadButton} 
              style={{ padding: '8px 12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} // Style for button
            >
              Upload Image
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImagePicker;
