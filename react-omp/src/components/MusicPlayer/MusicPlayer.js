import {useState} from 'react';
import ImageContainer from "../ImageContainer/ImageContainer";
import Navigation from "../Navigation/Navigation";
import MusicInfo from "../MusicInfo/MusicInfo";
import Audio from "../Audio/Audio";
import styles from "./MusicPlayer.module.scss";

const MusicPlayer = () => {
    const [song, setSong] = useState({"filename": 3, "title": "3"});
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const prev = () => (console.log("prev"));
    const togglePlay = () => {
        setIsPlaying(currentValue => !currentValue);
        console.log("togglePlay");
    };
    const next = () => (console.log("next"));
    const skip = () => (console.log("skip"));

    const updateProgress = (duration, currentTime) => {
        const progressPercent = (currentTime / duration) * 100;
        setProgress(progressPercent);
        //console.log('updateProgres getting an event as an argument', e);
    }

    return (
        <div className={styles["music-container"]}>
            <ImageContainer isPlaying={isPlaying} imgPath={`images/${song.filename}.jpg`} />
            <Audio onChange={updateProgress} isPlaying={isPlaying} src={`music/${song.filename}.mp3`}/>
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