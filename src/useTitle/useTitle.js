import React,{useState,useEffect} from "react";

/*
    윈도우 창 제일 위에 존재하는 title바의 상태를 변경하는 함수형 컴포넌트. 
 */

const useTitle = (initialText) => {
    const [title,setTitle] = useState(initialText);
    const onChange = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(onChange,[title]);
    return setTitle;
}

const Output = () => {
    const title = useTitle ("Loading...");
    return setTimeout(() => title("Home"),5000);
}

export default Output;