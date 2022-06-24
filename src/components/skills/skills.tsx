import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IHover, ISkill } from '../../App';
import { RootState } from '../../app/store';
import SkillBtn from '../skill_btn/skill_btn';
import styles from './skills.module.css';

const Skills = ({ skills, handleHover }: { skills: ISkill[], handleHover: IHover }) => {
    const selectedIdx = useSelector((state: RootState) => state.selected.index);
    return (
        <div className={styles.skills}>
            <div className={styles.most}>
                <p className={styles.title}>주요 기술</p>
                <div className={styles.btns}>
                    {
                        skills.slice(0, 3).map((item, index) => (
                            <SkillBtn key={index} item={item} isActive={selectedIdx==index} handleHover={handleHover} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.tag}>
                <p className={styles.title}>기술 태그</p>
                <div className={styles.btns}>
                    {
                        skills.slice(3).map((item, index) => (
                            <SkillBtn key={index} item={item} isActive={selectedIdx==index+3} handleHover={handleHover} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default React.memo(Skills);