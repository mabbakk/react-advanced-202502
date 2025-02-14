import Header from "./components/Layout/Header";
import './App.css';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartContext from "./context/cart-context.js";

const App = () => {
    // 장바구니 모달을 열고 닫는 상태변수
    const [cartIsShown, setCartIsShown] = useState(false);

    // 모달을 열어주는 함수
    const handleShowCart = () => setCartIsShown(true);

    // 모달을 닫아주는 함수
    const handleHideCart = () => setCartIsShown(false);

    return (
        // 실제로 공유할 데이터는 Provider의 value 속성에 지정한다.
        <CartContext.Provider value={{
            cartName: '카트카트',
            amount: 10,
            isOpen: false
        }}>
            {cartIsShown && <Cart onClose={handleHideCart} />}
            <Header onShowCart={handleShowCart} />
            <div id='main'>
                <Meals />
            </div>
        </CartContext.Provider>
    );
};

export default App;