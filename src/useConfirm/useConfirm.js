import React from "react";

/*
    클릭 이벤트 혹은 여타 다른 이벤트를 실행했을 때 정말 할 것인지 의사를 물어보는 일반 메서드 .
    confirm api를 사용한다.
*/

const useConfirm = (message="",accept,cancel) => {
    const confirmEvent = () => {
        if(window.confirm(message)){
            accept();
        }else{
            cancel();
        }
    }
    return confirmEvent;
}

export default () => {
    const accept = () => {
        console.log("accpet")
    }
    const cancel = () =>{
        console.log("cancel")
    }
    const confirmAction = useConfirm("Really?",accept,cancel);
    return (
        <div>
            <button onClick={confirmAction}>confirmBtn</button>
        </div>)
}