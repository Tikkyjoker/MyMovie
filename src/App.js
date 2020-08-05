import React, {useEffect, useState} from 'react';
import logo from './asset/logo.svg';
import Axios from 'axios'
import './App.css';
import MovieList from "./movieList";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [dataArr, setData] = useState({row: []});
    let search = (keyword) => {
        let dataA = []
        let url = "https://api.themoviedb.org/3/search/movie?api_key=59f43ae4196b87bbd71f630649bdcfff&query=" + keyword

        Axios.get(url).then(result => {
            // console.log(result.data.results)
            result.data.results.forEach(item => {
                dataA.push(item)
            })
            setData({row: dataA})
        })
    }
    useEffect(() => {

    }, [])

    return (
        <div className="App">
            <table className='Nev'>
                <tbody>
                <tr>
                    <td>
                        <img src={logo} width='50'/>
                    </td>
                    <td>
                        coding my learn react
                    </td>
                </tr>
                </tbody>
            </table>
            <input style={{fontSize: 24, display: 'block', width: '100%', paddingLeft: 8}}
                   placeholder='enter your movie'
                   onChange={(event) => {
                       search(event.target.value)
                   }}/>
            {dataArr.row.map((item,index) => {
                return <MovieList key={index} movie={item}/>
            })}
        </div>
    );
}

export default App;
