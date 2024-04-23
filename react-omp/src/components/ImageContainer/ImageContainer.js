import styles from "./ImageContainer.module.scss";

const ImageContainer = (props) => {
    
    const mainStyles = [styles["img-container"]];

    if(props.isPlaying) {
        mainStyles.push(styles["play"]);
    }

    return (
        <div className={mainStyles.join(" ")}>
            <img src={props.imgPath} alt="music-cover" />
        </div>
    )
}

export default ImageContainer;