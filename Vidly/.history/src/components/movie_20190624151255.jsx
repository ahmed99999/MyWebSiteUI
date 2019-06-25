import React, { Component } from 'react';
import { getMovie } from '../services/movieService';
import Like from './comon/like';
import { Link } from 'react-router-dom';

class Movie extends Component {

    state = { 
        movie: {},
        isLiked : false,
        isMouned : false
    };

    async componentDidMount (){
        const { data : movie } = await getMovie( this.props.movie._id );
        this.setState({ movie, isMouned: true });
    }

    handelLiked = movie => {
        const isLiked = ! this.state.isLiked;
        this.setState({ movie, isLiked });
    };

    render() {
        const { movie, isMouned } = this.state;

        const { onDecrement, onDelete, onIncrement } = this.props;
        const { isLiked } = this.state; 
        return (
            <tr id={movie._id} >
                <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
                <td>{ (movie.genre) ? movie.genre.name : ''}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={isLiked} onClick={ ()=>this.handelLiked( movie ) }/></td>
                <td><button className="btn btn-danger" onClick={onDelete} >Delete</button></td>
                <td><button className="btn btn-secondary" onClick={onIncrement}> + </button></td>
                <td><button className="btn btn-secondary" onClick={onDecrement} disabled={movie.numberInStock ? '' : 'disabled'}> - </button></td>
            </tr>
        );
    }
}
 
export default Movie;