import React from 'react';
import URLBtn from '../url_btn/url_btn';
import styles from './contact.module.css';

const Contact = ({ }) => {
    
    return (
        <div className={styles.contact}>
            <div className={styles.call}>
                <p className={styles.title}>연락처</p>
                <div className={styles.btns}>
                    <p className={styles.num}>010 3773 0967</p>
                </div>
            </div>
            <div className={styles.urls}>
                <p className={styles.title}>깃허브 주소</p>
                <div className={styles.btns}>
                    <URLBtn path={"https://github.com/yty0643"} name={"https://github.com/yty0643"}/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Contact);