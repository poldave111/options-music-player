import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./Navigation.module.scss";

const Navigation = (props) => {
    


    return (
        <div className={styles.navigation}>
            <Button action={props.prev}>
                <Icon name="backward" />
            </Button>
            <Button modifier="big" action={props.togglePlay}>
                <Icon name="play" />
            </Button>
            <Button action={props.next}>
                <Icon name="forward" />
            </Button>
        </div>
    )
}

export default Navigation;
