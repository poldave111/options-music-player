import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <Button >
                <Icon name="backward" />
            </Button>
            <Button modifier="big">
                <Icon name="play" />
            </Button>
            <Button>
                <Icon name="forward" />
            </Button>
        </div>
    )
}

export default Navigation;
