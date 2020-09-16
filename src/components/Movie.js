import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../components/Movie.css"

function Movie({id, year, title, summary, poster, genres, rating }) {
    return (
    <Link to= {{
        pathname: `/movie/detail/${id}`,
        state: {
            id:id,
            year:year,
            title:title,
            summary:summary,
            poster:poster,
            genres:genres,
            rating:rating
        }
    }}>
        <div class="movie">
            <img src={poster} alt={title} title={title }/>
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h4 callName="movie__rating">{rating}/10</h4>
                <h5 class="movie__year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p class="movie__summary">{summary.slice(0,180)}....</p>
            </div>
        </div>
    </Link>
   );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired
};

export default Movie; 