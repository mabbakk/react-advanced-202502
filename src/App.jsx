import './App.css';
import CartProvider from "./context/CartProvider";
import CartApp from "./components/Cart/CartApp";

const App = () => {

    return (
        <CartProvider>
            <CartApp />
        </CartProvider>
    );
};

export default App;