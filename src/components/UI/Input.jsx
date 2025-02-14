
import styles from './Input.module.scss';

const Input = ({ label, inputAttr }) => {
    return (
        <div className={styles.input}>
            <label>{label}</label>
            {/* ... inputAttr 하면 inputAttr 객체 안에 있던 모든 props값이 들어옴*/}
            <input {...inputAttr} />
        </div>
    );
};

export default Input;
