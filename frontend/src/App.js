import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

axios.defaults.withCredentials = false
axios.defaults.baseURL = "http://study.solseng.kro.kr:9999"

function App() {
    const [list, setList] = useState([]);

    useEffect(() => {
        (async () => {
            // 1. axios 호출되어 백엔드로부터 데이터 수신
            // 2. 수신한 데이터 resultList에 저장
            // 3. setList함수를 통해 list 변수에서 저장
          
            // connect to localhost/api/values 
            const { data: resultList } = await axios.get('/api/values');
            setList(resultList); 

            // ajax(Async javascript And xml)
            // ajax -> jQuery
            
            // async - 비동기 작업을 정의 
            // await - 비동기 작업을 호출 , async안에서만 사용가능
            // const { data: result } = await handler.get('/api/item');
            // setItem(result);
        })();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <div>List</div>
                {
                list.map((item, idx) => (
                    // item = {"id":1,"value":"1111"}
                    // item = {"id":2,"value":"1111"}
                    // item = {"id":3,"value":"sss"}
                    <div key={idx}>{`${item.id}/${item.value}`}</div>
                ))
                }

            </header>

        </div>
    );
}


export default App;