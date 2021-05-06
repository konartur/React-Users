import Title from './Title'
import Adress from './Adress'
import Geo from './Geo'
import React, { Component } from 'react';
import styles from '../Styles/Styles.module.scss'

export default class Card extends Component {
    render() {
        return (
                <div className={styles.displayFlex}>
                    <div className={styles.card}>
                        <Title />
                        <Adress />
                        <Geo />
                    </div>
                 </div>
        )
    }
};
