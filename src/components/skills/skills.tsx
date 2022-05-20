import React, { useState } from 'react';
import { IHandle, ISkills } from '../../App';
import SkillBtn from '../skill_btn/skill_btn';
import styles from './skills.module.css';

const Skills = ({ skills, handleHover }: { skills: ISkills, handleHover: IHandle }) => {
    return (
        <div className={styles.skills}>
            <div className={styles.most}>
                <p className={styles.title}>주요 기술</p>
                <div className={styles.btns}>
                    {
                        Object.keys(skills).slice(0, 3).map((key, index) => (
                            <SkillBtn key={index} item={skills[key]} handleHover={handleHover} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.tag}>
                <p className={styles.title}>기술 태그</p>
                <div className={styles.btns}>
                    {
                        Object.keys(skills).slice(3).map((key, index) => (
                            <SkillBtn key={index} item={skills[key]} handleHover={handleHover} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;