import React, { Component } from 'react';

export default class Pad extends Component {
    handlePress = function(num){
        this.setState({
            pressed: num
        })
    }
    render() {
        const state = {
            pressed: 0
        }
        return (
        <div className="pad" pressed={state.pressed}> {
            [1,2,3,4,5,6,7,8,9].map((num) => {
                return (
                    <button className={num.toString()} onClick={() => this.handlePress(num)}>{num}</button>
                )
            })
        }
        </div>
        );
    }
}
