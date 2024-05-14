import { useRef, useState, useEffect, useMemo, useCallback} from 'react';
import ImageContainer from "../ImageContainer/ImageContainer";
import Navigation from "../Navigation/Navigation";
import MusicInfo from "../MusicInfo/MusicInfo";
import Audio from "../Audio/Audio";
import styles from "./MusicPlayer.module.scss";

const MusicPlayer = () => {
    const [song, setSong] = useState({"filename": 15, "title": "15"});
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // percent value of progress
    const [duration, setDuration] = useState(0); // song length
    const [currentTime, setCurrentTime] = useState(0); // time where the song is at this point in time
    
    const audioRef = useRef();

    const handleTimeUpdate = useCallback(() =>  {
        //const {currentTime } = audioRef.current;
        setCurrentTime(audioRef.current.currentTime);
        setProgress((currentTime/duration)*100);
    },[audioRef.current]);

    const onLoadedMetadata = useCallback(() => {
        //if(audioRef.current) {
            setDuration(audioRef.current.duration);
        //}
    },[audioRef.current]);

    // useEffect(() => {
    //     if (audioRef.current /*&& currentTime !== audioRef.current.currentTime*/) {
    //         //audioRef.current.currentTime = currentTime;
    //     }
    //     setProgress((currentTime/duration)*100);
    // }, [currentTime, audioRef.current, duration]);

    useEffect(() => {
        if(audioRef.current) {
            if(isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, audioRef.current]);

    const prev = () => (console.log("prev"));
    const togglePlay = () => {
        setIsPlaying(currentValue => !currentValue);
        console.log("togglePlay");
    };
    const next = () => (console.log("next"));
    const skip = (e) => {
        const width = e.target.clientWidth;
        const clickX = e.nativeEvent.offsetX;
        const ratio = clickX/width;
        setCurrentTime(ratio * duration);
        setProgress(ratio * 100);
        audioRef.current.currentTime = currentTime;
        console.log(width);
        console.log(clickX);
    }; //:toDo - start here! :) 

    const onEnded = () => {
        setIsPlaying(false); 
        setProgress(0);
        setCurrentTime(0);
    }

    return (
        <div className={styles["music-container"]}>
            <ImageContainer isPlaying={isPlaying} imgPath={`images/${song.filename}.jpg`} />
            <Audio 
                onEnded={onEnded} 
                src={`music/${song.filename}.mp3`} 
                audioRef={audioRef}
                handleTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
            />

            {/* <audio 
            onEnded={onEnded} 
            onTimeUpdate={handleTimeUpdate} 
            ref={audioRef} // referencja trafia do rodzica bo jest to props z rodzica (czyli MusicPlayer)
            src={`music/${song.filename}.mp3`} 
            preload="metadata"
            onLoadedMetadata={onLoadedMetadata}
        /> */}
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