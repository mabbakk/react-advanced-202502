
import { useContext } from 'react';
import styles from './CartModal.module.scss';
import CartContext from '../../context/cart-context';

const ModalOverlay = ({ children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

const CartModal = ({ children, onClose }) => {

    return (
        <>
            <div
                className={styles.backdrop}
                onClick={onClose}
            />
            <ModalOverlay>{children}</ModalOverlay>
        </>
    );
};

export default CartModal;
