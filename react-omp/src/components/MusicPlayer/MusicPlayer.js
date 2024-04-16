import ImageContainer from "../ImageContainer/ImageContainer";
import Navigation from "../Navigation/Navigation";
import MusicInfo from "../MusicInfo/MusicInfo";
import styles from "./MusicPlayer.module.scss";

const MusicPlayer = () => {
    return (
        <div className={styles["music-container"]}>
            <ImageContainer imgPath="images/3.jpg" />
            <MusicInfo title="test title" progress={50}/>
            <Navigation />
        </div>
    )
}

export default MusicPlayer; 