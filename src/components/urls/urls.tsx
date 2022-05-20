import React from 'react';
import URLBtn from '../url_btn/url_btn';
import styles from './urls.module.css';

const URLs = ({ }) => {
    
    return (
        <div className={styles.urls}>
            <p className={styles.title}>깃허브 주소</p>
            <div className={styles.btns}>
                <URLBtn path={"https://github.com/yty0643"} name={"https://github.com/yty0643"}/>
            </div>
        </div>
    );
};

export default URLs;