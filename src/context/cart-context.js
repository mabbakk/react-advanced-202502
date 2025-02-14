import { createContext } from "react";

// 장바구니앱에서 사용할 공유 상태값들을 관리하는 저장소

// createContext함수에 전달되는 객체는
// 실제로 공유할 데이터가 아닌 데이터의 이름과 타입만 지정한 명세다.
const CartContext = createContext({
    cartIsShown: false, // 모달을 열고닫는 여부
    openModal: () => {}, // 모달 열어주는 함수
    closeModal: () => {}, // 모달 닫아주는 함수
});

export default CartContext;