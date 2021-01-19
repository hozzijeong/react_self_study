import React,{useState} from "react";

/*
    데이터 값을 입력함에 따라 해당 값이 다른 구문에 반영이 될 수 있도록 설정하는 함수형 컴포넌트
*/

const useInput = (initialValue,valueCheck) => {
    const [value,setValue] = useState(initialValue);
    const onChange = (event) => {
        const {target: {value}} = event;
        setValue(value);
    }
    return {value,onChange}
};

const Output = () => {
    const value = useInput("");
    return (
        <div>
            <h3>{value.value}</h3>
            <input placeholder="Type Something" {...value} />
        </div>)
    
}

export default Output;