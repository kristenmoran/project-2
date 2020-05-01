import React from 'react';
import ReactPlayer from 'react-player';
import VideoUrls from './VideoUrls';
import './MovieVideo.css'

function MovieVideo(props) {
	let trailer = VideoUrls.find((video) => props.movieId === video.id);

	if (!trailer) return null;

	return (
		<div className='trailerContainer'>
			<ReactPlayer
				className='react-player'
				url={trailer.videoUrl}
				controls={true}
			/>
		</div>
	);
}

export default MovieVideo;
