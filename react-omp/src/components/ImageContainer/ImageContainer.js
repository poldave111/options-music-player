import styles from "./ImageContainer.module.scss";

const ImageContainer = (props) => {
    return (
        <div className={styles["img-container"]}>
            <img src={props.imgPath} alt="music-cover" />
        </div>
    )
}

export default ImageContainer;