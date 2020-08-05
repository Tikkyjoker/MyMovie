import React from 'react';



function movieList(props) {
    props.movie.poster_src = "https://image.tmdb.org/t/p/w185" + props.movie.poster_path;
    const {title,poster_src,overview} = props.movie
    return (
        <div className='container'>
            <table style={{textAlign:'left'}}>
                <tbody>
                <tr>
                    <td>
                        <img src={poster_src}/>
                    </td>
                    <td>
                        <strong>{title}</strong>
                        <p>{overview}</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

movieList.propTypes = {};

export default movieList;
