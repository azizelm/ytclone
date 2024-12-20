import React, { useState, useEffect } from 'react';
import { fetchVideos } from './YoutubeAPI';
import VideoList from './VideoList';
import './App.css'

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const loadVideos = async () => {
            const fetchedVideos = await fetchVideos('React tutorials');
            setVideos(fetchedVideos);
            if (fetchedVideos.length > 0) {
                setSelectedVideo(fetchedVideos[0]); // Par défaut, sélectionne la première vidéo
            }
        };

        loadVideos();
    }, []);

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
      <div>
          <h1>YouTube Videos</h1>
          {selectedVideo && (
              <div className="selected-video">
                  <h2>{selectedVideo.snippet.title}</h2>
                  <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                      title={selectedVideo.snippet.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
              </div>
          )}
          <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
      </div>
  );
  
  
};

export default App;
