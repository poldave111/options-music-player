import {useState} from 'react';
import ImageContainer from "../ImageContainer/ImageContainer";
import Navigation from "../Navigation/Navigation";
import MusicInfo from "../MusicInfo/MusicInfo";
import Audio from "../Audio/Audio";
import styles from "./MusicPlayer.module.scss";

const MusicPlayer = () => {
    const [song, setSong] = useState({"filename": 3, "title": "3"});
    const [isPlaying, setIsPlaying] = useState(false);

    const prev = () => (console.log("prev"));
    const togglePlay = () => {
        setIsPlaying(currentValue => !currentValue);
        console.log("togglePlay");
    };
    const next = () => (console.log("next"));
    const skip = () => (console.log("skip"));

    return (
        <div className={styles["music-container"]}>
            <ImageContainer isPlaying={isPlaying} imgPath={`images/${song.filename}.jpg`} />
            <Audio isPlaying={isPlaying} src={`music/${song.filename}.mp3`}/>
            <MusicInfo 
                title={`${song.title}`} 
                isPlaying={isPlaying}
                progress={50} 
                skip={skip} 
            />
            <Navigation isPlaying={isPlaying} prev={prev} togglePlay={togglePlay} next={next} />
        </div>
    )
}

export default MusicPlayer; 