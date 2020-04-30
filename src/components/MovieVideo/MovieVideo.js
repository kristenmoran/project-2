import React from 'react'
import ReactPlayer from 'react-player'
import VideoUrls from './VideoUrls'

function MovieVideo (props) {
	
	let trailer = VideoUrls.find((video) => props.movieId === video.id)
	
	return (
		<div>
			<ReactPlayer url={trailer} controls></ReactPlayer>
		</div>
	);
}

export default MovieVideo;
