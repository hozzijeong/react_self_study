import React,{useState,useEffect,useRef} from "react";

/*
    클릭 이벤트를 실행 했을 때, 실행시킬 함수를 hook을 통해 함수형 컴포넌트로 구현하는 메섣, 
*/

const useClick = onClick => {
    const element = useRef();
    useEffect( () =>{
        if(element.current){
            element.current.addEventListener("click",onClick);
        }
        return () => {
            if(element.current){
                element.current.removeEventListener("click",onClick);
            }
        }
    },[]
    );
    return element
}



const Output = () => {
    const onClick = () => {console.log("hi~ hello~ ")}
    const element = useClick(onClick);
    return (
        <div>
            <button ref={element}>Click me</button>
        </div>
    )
}

export default Output;