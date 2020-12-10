import React, { Component } from "react";
import { VIDEO } from "../../../constants/api";
import ReactHlsPlayer from "react-hls-player";

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoId: this.props.match.params.id,
            videoData: {}
        }
    }

    render() {
        const { videoData } = this.state
        console.log(videoData);
        return (
            <div className="App">
                <header className="App-header">
                    <h1>{this.state.videoData.name}</h1>
                    <ReactHlsPlayer
                    url={`${VIDEO.all}/${this.state.videoId}`}
                        // url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
                        autoplay={false}
                        controls={true}
                        width={500}
                        height={375}
                    />
                </header>
            </div>
        )
    }
}

export default Player;