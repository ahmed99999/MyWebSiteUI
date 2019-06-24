import React from 'react';
import Form from './comon/form'
import Joi from 'joi-browser';
import { getGenres } from '../services/genreService';
import { getMovie, saveMovie } from '../services/movieService';

class MovieDetails extends Form {

    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: 0,
            dailyRentalRate: 0
        },
        genres: [],
        errors: {},
        isMouned: false
    }

    doSubmit = () => {
        console.log('movies submitted');
        saveMovie(this.state.data);
        this.props.history.push('/movies');
    };

    async componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });

        const { match, history } = this.props;
        const movieId = match.params.id;
        if (movieId === 'new') return;

        const { data: currentMovie } = await getMovie(movieId);
        if (!currentMovie) return history.replace("/not-found");

        this.setState({ data: this.mapToViewMovie(currentMovie), isMouned: true });
    }

    mapToViewMovie = movie => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string().min(3).max(30).required(),
        numberInStock: Joi.number().min(0).max(100).required(),
        dailyRentalRate: Joi.number().min(0).max(10).required(),
        genreId: Joi.string().required()
    };

    render() {
        const { genres, data, isMouned } = this.state;
        return ( isMouned ) ? (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    <h1>Movie Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('title', 'Title', 'text')}
                        {this.renderSelect(genres, data.genreId, 'Genre', 'genreId')}
                        {this.renderInput('numberInStock', 'Stock', 'number')}
                        {this.renderInput('dailyRentalRate', 'Rate', 'number')}
                        {this.renderButton('save')}
                    </form>
                </div>
                <div className="col-5"></div>
            </div>
        ) : <div></div>;
    }
}

export default MovieDetails;