import {useMemo} from 'react';
import styles from "./MusicInfo.module.scss";

const MusicInfo = (props) => {

    //const progress = props.progress + "%";

    const progress = useMemo(() => props.progress + "%", [props.progress]);

    return (
        <div className={styles["music-info"]}>
            <h4 id="title">{props.title}</h4>
            <div className={styles["progress-container"]} id="progress-container">
                <div className={styles["progress"]} id="progress" style={{"width": progress}}></div>
            </div>
        </div>
    )
}

export default MusicInfo;