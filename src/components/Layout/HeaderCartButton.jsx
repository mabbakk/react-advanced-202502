import React, {useContext} from 'react';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.scss';
import CartContext from "../../context/cart-context.js";

const HeaderCartButton = () => {
    const { button, icon, badge } = styles;

    // useContext 훅은 컨텍스트가 관리하는 데이터를 한 번에 가져오는 함수
    // Consumer 개념은 알고있되, 사용은 하지 마셈. UseContext를 쓸 것!
    const { openModal } = useContext(CartContext);

    return (
        <button className={button} onClick={ openModal }>
            <span className={icon}>
                <CartIcon />
            </span>
            <span>My Cart</span>
            <span className={badge}>3</span>
        </button>
    );
};

export default HeaderCartButton;