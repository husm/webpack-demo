// module.exports = function() {
//     let greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings!";
//     return greet;
// }

// export function greeting() {
//     let greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// }

import React, { Component } from 'react';
import config from './config.json';
import styles from './Greeter.css';
import testStyle from './test.scss';

class Greeter extends Component {
    render() {
        console.log(styles);
        return (
            <div>
                <div className={styles.root}>{config.greetText}</div>
                <div className={testStyle.test}>TTTT</div>
            </div>
        )
    }
}

export default Greeter;

