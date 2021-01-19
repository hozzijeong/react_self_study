import React from "react";
import Lang, {useLang} from "./context";
import Screen from "./Screen"
// import UseInput from "./useInput/useInput";
// import ChangeTabs from "./changeTabs/ChangeTabs";
// import UseTitle from "./useTitle/useTitle";
// import UseClick from "./useClick/useClick";
// import UseConfirm from "./useConfirm/useConfirm";
import translations from "./translations";
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
*/

function App() {
    // const lang = useLang();
    return (
        <Lang defaultLang="en" translations={translations} >
            <Screen />
        </Lang >
    );
};


export default App; 