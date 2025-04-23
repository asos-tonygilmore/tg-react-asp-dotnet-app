import React from 'react';
import * as styles from './styles.css.ts';

const HelloWorld = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Hello, World!</h1>
            <p className={styles.paragraph}>Welcome to the React application styled with vanilla-extract!</p>
        </div>
    );
};

export default HelloWorld;
