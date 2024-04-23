import { useRef, useEffect } from "react";

const Audio = (props) => {
    //const { duration, currentTime } = e.srcElement;
    const audioRef = useRef(); 
    const handleTimeUpdate = (e) =>  {
        const { duration, currentTime } = audioRef.current;
        props.onChange(duration, currentTime);
        console.log('duration & currentTime', duration, currentTime);
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

    return (
        <audio onTimeUpdate={handleTimeUpdate} ref={audioRef} src={props.src}></audio>
    )
}

export default Audio;