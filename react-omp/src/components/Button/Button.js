import Icon from "../Icon/Icon";
import styles from "./Button.module.scss";

const Button = (props) => {

    const classes = [styles["action-btn"]];

    if (props.modifier) {
        classes.push(styles[`action-btn-${props.modifier}`]);
    }

    return (
        <div className={ classes.join(" ") }>
           {props.children}
        </div>
    )
}

export default Button;