import {useState} from 'react';
import ImageContainer from "../ImageContainer/ImageContainer";
import Navigation from "../Navigation/Navigation";
import MusicInfo from "../MusicInfo/MusicInfo";
import Audio from "../Audio/Audio";
import styles from "./MusicPlayer.module.scss";

const MusicPlayer = () => {
    const [song, setSong] = useState({"filename": 15, "title": "15"});
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [time, setTime] = useState(0); 

    const prev = () => (console.log("prev"));
    const togglePlay = () => {
        setIsPlaying(currentValue => !currentValue);
        console.log("togglePlay");
    };
    const next = () => (console.log("next"));
    const skip = (e) => {
        const width = e.target.clientWidth;
        const clickX = e.nativeEvent.offsetX;
        setProgress((clickX/width) * 100);
        setDuration((clickX/width) * time);
        
        console.log(width);
        console.log(clickX);



    }; //:toDo - start here! :) 

    const updateProgress = (duration, currentTime) => {
        const progressPercent = (currentTime / duration) * 100;
        setProgress(progressPercent);
        //console.log('updateProgres getting an event as an argument', e);
        setDuration(duration);
    }

    const onEnded = () => {
        setIsPlaying(false); 
        setProgress(0);
        setDuration(0);
    }

    return (
        <div className={styles["music-container"]}>
            <ImageContainer isPlaying={isPlaying} imgPath={`images/${song.filename}.jpg`} />
            <Audio 
                onChange={updateProgress} 
                onEnded={onEnded} 
                isPlaying={isPlaying} 
                src={`music/${song.filename}.mp3`} 
                setTime={setTime}
                duration={duration}
            />
            <MusicInfo 
                title={`${song.title}`} 
                isPlaying={isPlaying}
                progress={progress} 
                skip={skip} 
            />
            <Navigation isPlaying={isPlaying} prev={prev} togglePlay={togglePlay} next={next} />
        </div>
    )
}

export default MusicPlayer; 