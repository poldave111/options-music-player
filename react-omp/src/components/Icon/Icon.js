import styles from "./Icon.module.scss";

const Icon = (props) => {
    return (
        <i className={`fa fa-${props.name}`} />
    )
}

export default Icon;