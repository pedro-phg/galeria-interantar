import { useState, useEffect } from "react";
import axios from "axios";
import Picture from "./components/picture/Picture.tsx";
import NavBar from "./components/navbar/NavBar.tsx";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://interantar.com/_functions/gallery"
        );
        setPhotos(response.data.data);
      } catch (error) {
        console.error("Erro ao obter as fotos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="content">
      <NavBar />
      <div className="pictures__grid">
        {photos.map((photo) => (
          <Picture key={photo._id} photo={photo} />
        ))}
        {photos.map((photo) => (
          <Picture key={photo._id} photo={photo} />
        ))}
        {photos.map((photo) => (
          <Picture key={photo._id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default App;
