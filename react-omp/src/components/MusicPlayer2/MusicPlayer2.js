import { useRef, useState, useEffect, useMemo, useCallback} from 'react';
import ImageContainer from "../ImageContainer/ImageContainer";
import Navigation from "../Navigation/Navigation";
import MusicInfo from "../MusicInfo/MusicInfo";
import Audio from "../Audio/Audio";
import styles from "./MusicPlayer2.module.scss";

const MusicPlayer = ({song, prev, next}) => {
    //const [song, setSong] = useState({"filename": 15, "title": "15"});
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // percent value of progress
    const [duration, setDuration] = useState(0); // song length
    const audioRef = useRef();

    const handleTimeUpdate = useCallback(() =>  {
        const { currentTime } = audioRef.current;
        setProgress((currentTime / duration) * 100);
    }, [ audioRef.current ]);

    const onLoadedMetadata = useCallback(() => {
        setDuration(audioRef.current.duration);
    },[ audioRef.current ]);

    useEffect(() => {
        if(audioRef.current) {
            if(isPlaying) {  
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [ isPlaying, audioRef.current ]);

    
    const togglePlay = () => {
        setIsPlaying(currentValue => !currentValue);
    };
    
    const skip = (e) => {
        const width = e.target.clientWidth;
        const clickX = e.nativeEvent.offsetX;
        const ratio = clickX / width;
        audioRef.current.pause();
        audioRef.current.currentTime = ratio * duration;
        audioRef.current.play();
        setProgress(ratio * 100);
        // console.log('ratio', ratio);
        // console.log('ratio * duration', ratio * duration);
        // console.log('audioRef.current.currentTime', audioRef.current.currentTime);
    };

    const onEnded = () => {
        setIsPlaying(false); 
        setProgress(0);
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