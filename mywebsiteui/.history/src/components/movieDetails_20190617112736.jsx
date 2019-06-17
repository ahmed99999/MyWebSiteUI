import React from 'react';
import Form from './comon/form'
import Joi from 'joi-browser';
import { getGenres } from '../services/fakeGenreService';
import { getMovie, saveMovie } from '../services/fakeMovieService';

class MovieDetails extends Form {

    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: 0,
            rate: 0
        },
        genres: [],
        errors: {}
    }

    doSubmit = () => {
        console.log('movies submitted');
        saveMovie(this.state.data);
        this.props.history.push('/movies');
    }

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });

        const { match, history } = this.props;
        const movieId = match.params.id;
        if (movieId === 'new') return;

        const currentMovie = getMovie(movieId);
        if (!currentMovie) return history.replace("/not-found");

        this.setState({ data: this.mapToViewMovie(currentMovie) });
    }

    mapToViewMovie = movie => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            rate: movie.dailyRentalRate
        };
    }

    schema = {
        title: Joi.string().min(3).max(30).required(),
        numberInStock: Joi.number().min(0).max(100).required(),
        rate: Joi.number().min(0).max(10).required()
    };

    render() {
        const { genres, data } = this.state;

        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    <h1>Movie Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('title', 'Title', 'text')}
                        {this.renderSelect(genres, data.genreId, 'Genre', 'genreId')}
                        {this.renderInput('numberInStock', 'Stock', 'number')}
                        {this.renderInput('rate', 'Rate', 'number')}
                        {this.renderButton('save')}
                    </form>
                </div>
                <div className="col-5"></div>
            </div>
        );
    }
}

export default MovieDetails;