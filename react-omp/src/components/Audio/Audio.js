import { memo } from "react";

const Audio = (props) => {
    //const { duration, currentTime } = e.srcElement;
    //console.log('audioRef', audioRef);

    console.log('audio props', props);

    return (
        <audio 
            onEnded={props.onEnded} 
            onTimeUpdate={props.handleTimeUpdate} 
            ref={props.audioRef} // referencja trafia do rodzica bo jest to props z rodzica (czyli MusicPlayer)
            src={props.src} 
            preload="metadata"
            onLoadedMetadata={props.onLoadedMetadata}
        />
    )
}

export default Audio;