import React from 'react';
import styles from './university.module.css';
import logo from '../../logo.png';

const University = ({ }) => {
    return (
        <div className={styles.univ}>
            <p className={styles.title}>학력</p>
            <div className={styles.info}>
                <img className={styles.logo} src={logo} />
                <div className={styles.data}>
                    <p>동아대학교 컴퓨터공학과</p>
                    <p>2017.03 ~ 2022.02</p>
                    <p>3.3 / 4.5 학점</p>
                </div>
            </div>
        </div>
    );
};

export default University;