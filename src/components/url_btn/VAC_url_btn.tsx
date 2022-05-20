import React, { useState } from 'react';
import styles from './url_btn.module.css';

const VACURLBtn = ({ path }: { path: string }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <div className={styles.btn}>
            <a className={styles.title}
                href={path}
                target="_blank"
                onMouseEnter={() => { setIsActive(true) }}
                onMouseLeave={() => { setIsActive(false) }}>
                {path}
            </a>
            <div className={`${styles.cover} ${isActive && styles.active}`}></div>
            <div className={styles.cover2}></div>
        </div>
    );
};
export default VACURLBtn;