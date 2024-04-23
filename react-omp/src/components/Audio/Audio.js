import { useRef, useEffect } from "react";

const Audio = (props) => {

    const audioRef = useRef(); 

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
        <audio ref={audioRef} src={props.src}></audio>
    )
}

export default Audio;