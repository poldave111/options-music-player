import { useRef, useEffect } from "react";

const Audio = (props) => {
    //const { duration, currentTime } = e.srcElement;
    const audioRef = useRef(); 
    const handleTimeUpdate = (e) =>  {
        const { duration, currentTime } = audioRef.current;
        props.onChange(duration, currentTime);
        console.log('duration & currentTime', duration, currentTime);
    };
    const setDuration = () => {
        if(audioRef.current) {
            props.setTime(audioRef.current.duration);
            console.log('duration', audioRef.current.duration);
        }
    };

    useEffect(() => {
        if(audioRef.current) {
            if(props.isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [props.isPlaying]);

    useEffect(() => {
        if (audioRef.current && props.currentTime !== audioRef.current.currentTime) {
            audioRef.current.currentTime = props.duration;
        }
    }, [props.duration]);

    return (
        <audio 
            onEnded={props.onEnded} 
            onTimeUpdate={handleTimeUpdate} 
            ref={audioRef} 
            src={props.src} 
            preload="metadata"
            onLoadedMetadata={setDuration}
        />
    )
}

export default Audio;