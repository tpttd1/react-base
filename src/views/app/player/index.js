import React, { Component } from "react";

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoId: this.props.match.params.id,
            videoData: {}
        }
        console.log("Player");
    }

    async componentDidMount() {
        try {
            const res = await fetch(`http://localhost:4000/video/${this.state.videoId}/data`);
            const data = await res.json();
            this.setState({ videoData: data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <video controls autoPlay crossOrigin="anonymous">
                        <source src={`http://localhost:4000/video/${this.state.videoId}`} type="video/mp4"></source>
                        <track label="English" kind="captions" srcLang="en" src={`http://localhost:4000/video/${this.state.videoId}/caption`} default></track>
                    </video>
                    <h1>{this.state.videoData.name}</h1>
                </header>
            </div>
        )
    }
}

export default Player;