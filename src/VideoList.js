import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
    return (
        <ul>
            {videos.map((video) => (
                <li
                    key={video.id.videoId}
                    style={{
                        marginBottom: '20px',
                        cursor: 'pointer',
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                    }}
                    onClick={() => onVideoSelect(video)} // Déclenche la sélection de vidéo
                >
                    <h3>{video.snippet.title}</h3>
                    <p>{video.snippet.description}</p>
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        style={{ display: 'block', marginBottom: '10px' }}
                    />
                </li>
            ))}
        </ul>
    );
};

export default VideoList;
