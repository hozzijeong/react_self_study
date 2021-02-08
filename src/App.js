import React ,{useState} from "react";
import axios from "axios";

const server = axios.create({
    baseURL: "http://localhost:8080/test"
});
const list = [];
function App() {
        const [name,setName] = useState("");
        const insert = ({text}) => server.post("/board/books",{
            params:{
                name: {text}
            }
        })
        
    
        const onSubmit = (e) => {
            e.preventDefault();
            insert(name);
            list.push(name);
            console.log(list);
            setName("");
        }

        const onChange = (e) => {
            const {target : {value}} = e;
            setName(value);
        }

        return (
            <>
            <form onSubmit={onSubmit}>
                <input value={name} type="text" placeholder="input Books name" onChange={onChange}/>
            </form>
            <ul>
                {list.map(data => 
                    <li>{data}</li>)}
            </ul>
            </>
       );
};

export default App; 