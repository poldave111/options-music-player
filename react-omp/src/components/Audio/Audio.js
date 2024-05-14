import { memo } from "react";

const Audio = memo((props) => {
    //const { duration, currentTime } = e.srcElement;
    //console.log('audioRef', audioRef);



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
})

export default Audio;