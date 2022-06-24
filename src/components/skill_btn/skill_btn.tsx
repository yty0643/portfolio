import React from 'react';
import { IHover, ISkill } from '../../App';
import styles from './skill_btn.module.css';

const SkillBtn = ({ item, isActive, handleHover }: { item: ISkill, isActive: boolean, handleHover: IHover }) => {
    
    return (
        <div className={styles.btn}>
            <a className={`${styles.title} ${isActive && styles.active}`}
                onMouseEnter={() => { handleHover(item.key) }}>
                {item.name}
            </a>
            <div className={`${styles.cover} ${isActive && styles.active}`} style={{ backgroundColor: item.color }}></div>
        </div>
    );
};

export default React.memo(SkillBtn);