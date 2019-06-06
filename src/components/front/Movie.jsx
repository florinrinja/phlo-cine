import React, { useState } from 'react';
import '../Movie.css';
import ReactPlayer from 'react-player';
import { Row } from 'react-bootstrap';

const Movie = ({ name, poster, id, release_year, trailer, rotten, genre }) => {

	const [playing, setPlaying] = useState(false);
	const [volume, setVolume] = useState(0.5);
	const [duration, setDuration] = useState(0);
	const [wastedTime, setWastedTime] = useState(0);
	const [remainTime, setRemainTime] = useState(0);

	const volumeUp = () => {
		if (volume < 1) {
			setVolume(parseFloat((volume + 0.1).toFixed(1)))
		}
	}

	const volumeDown = () => {
		if (volume > 0) {
			setVolume(parseFloat((volume - 0.1).toFixed(1)))
		}
	}

	const getDuration = (durationVideo) => {
		setDuration(durationVideo);
	}

	const display = (duration) => {

		const minutes = (duration % 3600) / 60
		duration %= 60

		return [minutes, duration].map(format).join(':')
	}

	const format = (val) => {
		return ('0' + Math.floor(val)).slice(-2)
	}

	const getProgress = (progressVideo) => {
		setWastedTime((progressVideo.playedSeconds).toFixed(0));
		setRemainTime((duration - progressVideo.playedSeconds).toFixed(0));
	}

	return (
		<div className="element">

			<Row className="title col-12">
				<h5>{name}</h5>
			</Row>
			<Row className='col-12'>
			<h6><small>{genre}</small></h6>
			</Row>
			<Row className='col-12'>
			<p><small>Release year: {new Date(release_year).toISOString().replace(/T.*/, '').split('-').reverse().join('-')}</small></p>
			</Row>

			<Row className="movie_media mt-3">
				<div className="movie_poster col-xs-12 col-sm-12 col-m-3 col-lg-3">
					<img src={poster} alt={name} className="promo-img" />
				</div>
				<div className="movie_trailer col-xs-12 col-sm-12 col-m-9 col-lg-9">
					<ReactPlayer 
						volume={volume}
						url={trailer}
						playing={playing}
						controls={false}
						onDuration={getDuration}
						onProgress={getProgress}
					/>
					<div className="video_control">
						<button onClick={() => setPlaying(!playing)}>
							{playing ? "pause trailer" : "start trailer"}
						</button>
						<div className="volume_button">
							<button onClick={volumeDown}>-</button>
							<p><small className="text_volume">volume</small></p>
							<button onClick={volumeUp}>+</button>
						</div>
						<p><small> lapsed : {display(wastedTime)}</small></p>
						<p><small> remaining : {display(remainTime)}</small></p>
						<p><small>duration : {display(duration)}</small></p>
					</div>
				</div>
			</Row>

			<Row style={{ border: "0 none", overflow: "hidden", margin: "50px auto", maxWidth: 700 }}>
				{/* <iframe scrolling="no" src={rotten} style={{ border: "0 none", height: 550, marginTop: -210, width: 700 }} title="myframe" /> */}
			</Row>
		</div >
	)
};

export default Movie;