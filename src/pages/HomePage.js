import React from "react";
import '../App.css';


const HomePage = (props) => (
    <>
        <h1>David's Movie Review Site</h1>
        <ul>
            {props.movies.map( movie => (
                <>
                <li key={movie.name}>{movie.name}</li>
                <li> <img src={'./imgs/' + movie.moviePosterSrc}/></li>
                </>
                ))}
        </ul>
    </>
);



export default HomePage;