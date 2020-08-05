import React from 'react';



function movieList(props) {
    console.log(props)
    props.movie.poster_src = "https://image.tmdb.org/t/p/w185" + props.movie.poster_path;
    return (
        <div className='container'>
            <table key={props.movie.id} style={{textAlign:'left'}}>
                <tbody>
                <tr>
                    <td>
                        <img src={props.movie.poster_src}/>
                    </td>
                    <td>
                        <strong>{props.movie.title}</strong>
                        <p>{props.movie.overview}</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

movieList.propTypes = {};

export default movieList;
