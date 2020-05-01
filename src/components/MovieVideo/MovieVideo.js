import React from 'react'
import ReactPlayer from 'react-player'
import VideoUrls from './VideoUrls'

function MovieVideo (props) {
	let trailer = VideoUrls.find((video) => props.movieId === video.id)

	console.log(trailer)

	if (!trailer) return null;
	
	return (
		<div>
			<ReactPlayer
				className='react-player'
				url={trailer.videoUrl}
				controls={true}
				width='100%'
				height='100%'
			/>
		</div>
	);
}

export default MovieVideo;
