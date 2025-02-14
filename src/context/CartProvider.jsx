import { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = ({ children }) => {

    const [cartIsShown, setCartIsShown] = useState(false);

    const openModal = () => setCartIsShown(true);
    const closeModal = () => setCartIsShown(false);

    const initialValue = {
        cartIsShown: cartIsShown, // 모달을 열고닫는 여부
        openModal: openModal, // 모달 열어주는 함수
        closeModal: closeModal, // 모달 닫아주는 함수
    };

    return (
        <CartContext.Provider value={initialValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;