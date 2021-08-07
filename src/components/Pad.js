import React, { Component } from 'react';

export default class Pad extends Component {
    state = {
        mode: 'normal',
    }

    handlePress(num) {
        console.log(num)
    }

    render() {
        return (
        <div className="pad"> {
            [1,2,3,4,5,6,7,8,9].map((num) => {
                return (
                    <button className={num.toString()} onClick={this.handlePress(num)}>{num}</button>
                )
            })
        }
        </div>
        );
    }
}
