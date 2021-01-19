import React, {useReducer} from "react";
// import Lang, {useLang} from "./context";
// import Screen from "./context/Screen"
// import UseInput from "./useInput/useInput";
// import ChangeTabs from "./changeTabs/ChangeTabs";
// import UseTitle from "./useTitle/useTitle";
// import UseClick from "./useClick/useClick";
// import UseConfirm from "./useConfirm/useConfirm";
// import translations from "./context/translations";
/*
    index -> App -> Screen -> Header 순으로 트리 구조가 생성이 됨.
    원하는 것은 Header에 username의 값이 전달 되는 것임. 

    App 에 user object 생성해서 위 순서에 따라 파일을 거쳐갈 때마다 props로 user의 데이터 값을 주는 것은
    좋은 방법이 아님. Screen은 user를 사용하지도 않는데 user props를 다뤄야 함.

    새로운 방법: context.js 를 만들고 해당 파일을 컴포넌트로 생성
    context.js 에서 생성한 컴포넌트 UserContextProvider를 가장 최상위 컴포넌트인 App에 실행시켜 줌으로써,
    이제 App에 있는 하위 파일들을 전부 children으로 적용 가능 
                {/* <UseInput />
            <ChangeTabs/>
            <UseTitle />
            <UseClick/>
            <UseConfirm/>
            // const lang = useLang();
    // provider로 전체를 덮기 전에는 Context변수 사용이 안되는건가? 이거는 한번 체크 해보기 
*/
const INCRRESEMENT = "incresement";
const DECRESEMENT = "decresement";

const reducer = (state,action) => {
    switch(action){
        case INCRRESEMENT : 
            return {count : state.count +1};
        case DECRESEMENT : 
            return {count : state.count -1};
        default : 
            throw Error();
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer,{count : 0}); // useReducer의 2번째 파라미터는 state의 초기값.
    // useReducer는 state의 값을 아예 "대체" 해버리는 것임. 값을 떼고 새로운 값을 붙인다는 의미. reducer함수의 reutrn 값을 state에 대체시킴.    
    // dispatch는 type을 설정해주는 중요한 메서드
    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick= {() => dispatch(INCRRESEMENT)}>Add</button>
            <button onClick= {() => dispatch(DECRESEMENT)}>Sub</button>
        </div>
    );
};


export default App; 