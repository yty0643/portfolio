import React, { useState } from 'react';
import { IHover, ISkill } from '../../App';
import styles from './skill_btn.module.css';

const SkillBtn = ({ item, handleHover }: { item: ISkill, handleHover: IHover }) => {
    return (
        <div className={styles.btn}>
            <a className={`${styles.title} ${item.isActive && styles.active}`}
                onMouseEnter={() => { handleHover(item, true) }}
                onMouseLeave={() => { handleHover(item, false) }}>
                {item.name}
            </a>
            <div className={`${styles.cover} ${item.isActive && styles.active}`} style={{ backgroundColor: item.color }}></div>
        </div>
    );
};

export default SkillBtn;