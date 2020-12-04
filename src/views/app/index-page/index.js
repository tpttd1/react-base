import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedFile: null,
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:4000/videos');
            const data = await response.json();
            this.setState({ videos: [...data] });
        } catch (error) {
            console.log(error);
        }
    }

    onChangeHandler = event => {
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:4000/upload", data, {
            // receive two    parameter endpoint url ,form data
        }).then(res => { // then print response status
            console.log(JSON.stringify(res))
        })
    }

    render() {
        return (
            <div className="App App-header">
                <div className="container">
                    <div className="row">
                        <input type="file" name="file" onChange={this.onChangeHandler} />
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                    </div>
                    <div className="row">
                        {this.state.videos.map(video =>
                            <div className="col-md-4" key={video.id}>
                                <Link to={`/app/player/${video.id}`}>
                                    <div className="card border-0">
                                        <img src={`http://localhost:4000${video.poster}`} alt={video.name} />
                                        <div className="card-body">
                                            <p>{video.name}</p>
                                            <p>{video.duration}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;