import React,{useState} from "react";

/*
    탭을 클릭 할때마다 안에 내용이 바뀌도록 하는 기능을 함수형 컴포넌트를 통해 생성
 */

const array = [
    {
        name: "data1",
        content: "content1"
    },
    {
        name: "data2",
        content: "content2"
    },
    {
        name: "data3",
        content: "content3"
    }

]

const UseTabs = (initialNum,array) =>{
    const [currentNum, futuerNum] = useState(initialNum);
    return {
        currentItem : array[currentNum],
        futuerItem: futuerNum 
    }
}

const Output = () => {
    const {currentItem,futuerItem} = UseTabs(0,array);
    return (<div>
        {array.map((data,idx) => (
            <button onClick={() => futuerItem(idx)}>{data.name}</button>))}
        <div>{currentItem.content}</div>
    </div>)
}

export default Output; 