import React, { useState } from 'react';
import styles from './url_btn.module.css';

const URLBtn = ({ path, name }: { path: string, name: string }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <div className={styles.btn}>
            <a className={styles.title}
                href={path}
                target="_blank"
                onMouseEnter={() => { setIsActive(true) }}
                onMouseLeave={() => { setIsActive(false) }}>
                {name}
            </a>
            <div className={`${styles.cover} ${isActive && styles.active}`}></div>
        </div>
    );
};
export default URLBtn;