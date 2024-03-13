import { useState, useEffect } from 'react';
import { getDownloadURL, ref, listAll } from 'firebase/storage';
import { getStorage } from 'firebase/storage';
import '../App.css';
import { app } from './firebase';

const Card = () => {
  const storage = getStorage(app);
  
  const [imageURLs, setImageURLs] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
 
  useEffect(() => {
    const fetchImageURLs = async () => {
      const storageRef = ref(storage, 'fotos');
      
      try {
        const filesList = await listAll(storageRef);

        const urlsPromises = filesList.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        });

        const urls = await Promise.all(urlsPromises);
        setImageURLs(urls);
      } catch (error) {
        console.error('Error al obtener las URLs de descarga desde Firebase Storage:', error);
      }
    };

    fetchImageURLs();
  }, [storage]);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };
  
  return (
    <div className=" contain "id="gallery" >
      {imageURLs.map((url, index) => (
        <div className="img-responsive "     key={url} onClick={() => handleImageClick(url)}>
          
            <img src={url} data-bs-toggle="modal" className=''
              data-bs-target="#modalTable" alt={`Image ${index + 1}`} />
         
        </div>
      ))}
     
     <div className="modal fade  " id="modalTable" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  <img src={selectedImage} alt="Modal Image" />
      </div>  
    </div>     

    </div>
    
  );
};

export default Card;