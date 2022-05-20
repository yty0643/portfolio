import React from 'react';
import VACURLBtn from '../url_btn/VAC_url_btn';
import styles from './urls.module.css';

const URLs = ({ }) => {
    
    return (
        <div className={styles.urls}>
            <p className={styles.title}>깃허브 주소:</p>
            <VACURLBtn path={"https://github.com/yty0643"}/>
        </div>
    );
};

export default URLs;