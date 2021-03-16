import React, { Component } from "react";
import axios from 'axios';
import Posts from "./posts";
import "./style.scss";

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
        })
    }

    onClick = () => {
        window.showModalIcon()
    }

    render() {
        return (
            <div className="app">
                <div className="custom-container">
                    <div className="flex-grow-1">left side</div>
                    <Posts />
                    <div className="flex-grow-1">list friends</div>
                </div>
            </div>
        )
    }
}

export default Home;