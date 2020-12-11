import React, { Component } from "react";
import { VIDEO } from "../../../constants/api";
import ReactHlsPlayer from "react-hls-player";

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoId: this.props.match.params.id,
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ReactHlsPlayer
                        url={`${VIDEO.all}/${this.state.videoId}`}
                        autoplay={false}
                        controls={true}
                        width="auto"
                        height={375}
                    />
                </header>
            </div>
        )
    }
}

export default Player;