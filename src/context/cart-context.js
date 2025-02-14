import { createContext } from "react";

// 컴포넌트가 아니기 때문에 파일 첫 글자 대문자로 X!
//           "            파일 확장자js 로 써도 됨!


// 장바구니 앱에서 사용할 공유 상태값들을 관리하는 저장소

// createContext 함수에 전달되는 객체는
// 실제로 공유할 데이터가 아닌 데이터의 이름과 타입만 지정한 명세이다.
const CartContext = createContext({
    cartName: '',  // 여기에는 실제값을 적는 게 아니라 타입을 적는 것!
    amount: 0,
    addItem: (item) => {},
    isOpen: false
});

export default CartContext;