import React, { Component } from 'react';

class SaveMovie extends Component {
    state = {  }
    render() {
        const { match, history } = this.props;
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h1>Edit / delete (Form) Client {match.params.id}</h1>
                    <button className="btn btn-primary" onClick={() => history.replace("/movies")}>Save</button>
                </div>
                <div className="col-1"></div>
            </div>
        );
    }
}
 
export default SaveMovie;