import React, { useState } from 'react';
import { IHandle, ISkill } from '../../App';
import styles from './skill_btn.module.css';

const SkillBtn = ({ item, handleHover }: { item: ISkill, handleHover: IHandle }) => {
    return (
        <div className={styles.btn}>
            <a className={`${styles.title} ${item.isActive && styles.active}`}
                onMouseEnter={() => { handleHover(item, true) }}
                onMouseLeave={() => { handleHover(item, false) }}>
                {item.name}
            </a>
            <div className={`${styles.cover} ${item.isActive && styles.active}`} style={{ backgroundColor: item.color }}></div>
            <div className={styles.cover2}></div>
        </div>
    );
};

export default SkillBtn;