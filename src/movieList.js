import React from 'react';



function movieList(movie) {
    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
    return (
        <div className='container'>
            <table key={movie.id} style={{textAlign:'left'}}>
                <tbody>
                <tr>
                    <td>
                        <img src={movie.poster_src}/>
                    </td>
                    <td>
                        <strong>{movie.title}</strong>
                        <p>{movie.overview}</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

movieList.propTypes = {};

export default movieList;
