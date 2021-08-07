import React, { Component } from 'react';

export default class Pad extends Component {
    state = {
        mode: 'normal',

    }

    changeMode(button) {
        this.setState({
            mode: button
        })
    }

    render() { 
        return (
        <div>
            <div className="normal">
                <button onClick={this.changeMode("normal")}>
                    Normal
                </button>
            </div>
            <div className="centre">
                <button onClick={this.changeMode("centre")}>
                    Centre
                </button>
            </div>
            <div className="corner">
                <button onClick={this.changeMode("centre")}>
                    Corner
                </button>
            </div>
            <div className="colour">
                <button onClick={this.changeMode("colour")}>
                    Colour
                </button>
            </div>
        </div>);
    }
}
