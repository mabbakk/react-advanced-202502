import { forwardRef } from 'react';
import styles from './Input.module.scss';

const InputComponent = ({ label, inputAttr }, ref) => {
    return (
        <div className={styles.input}>
            <label>{label}</label>
            <input ref={ref} {...inputAttr} />
        </div>
    );
};

const Input = forwardRef(InputComponent);

export default Input;
