import {useState} from 'react';
import ImageContainer from "../ImageContainer/ImageContainer";
import Navigation from "../Navigation/Navigation";
import MusicInfo from "../MusicInfo/MusicInfo";
import Audio from "../Audio/Audio";
import styles from "./MusicPlayer.module.scss";

const MusicPlayer = () => {
    const [song, setSong] = useState({"filename": 3, "title": "3"});

    const prev = () => (console.log("prev"));
    const togglePlay = () => (console.log("togglePlay"));
    const next = () => (console.log("next"));
    const skip = () => (console.log("skip"));

    return (
        <div className={styles["music-container"]}>
            <ImageContainer imgPath={`images/${song.filename}.jpg`} />
            <Audio src={`music/${song.filename}.mp3`}/>
            <MusicInfo 
                title={`${song.title}`} 
                progress={50} 
                isPlaying={false} 
                skip={skip} 
            />
            <Navigation prev={prev} togglePlay={togglePlay} next={next} />
        </div>
    )
}

export default MusicPlayer; 