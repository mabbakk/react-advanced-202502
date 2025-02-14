import { useContext } from 'react';
import Header from '../Layout/Header';
import Meals from '../Meals/Meals';
import Cart from './Cart';
import CartContext from '../../context/cart-context';

const CartApp = () => {

    const { cartIsShown } = useContext(CartContext);

    return (
        <>
            {cartIsShown && <Cart />}
            <Header />
            <div id='main'>
                <Meals />
            </div>
        </>
    );
}

export default CartApp