import React, { useState } from 'react';
import { IHandle, ISkills } from '../../App';
import VACSkillBtn from '../skill_btn/VAC_skill_btn';
import styles from './skills.module.css';

const Skills = ({ skills, handleHover }: { skills: ISkills, handleHover: IHandle }) => {
    
    
    return (
        <div className={styles.skills}>
            <div className={styles.most}>
                <p className={styles.title}>주요 기술:</p>
                {
                    Object.keys(skills).slice(0, 3).map((key, index) => (
                        <VACSkillBtn key={index} item={skills[key]} handleHover={handleHover} />
                    ))
                }
            </div>
            <div className={styles.tag}>
                <p className={styles.title}>기술 태그:</p>
                {
                    Object.keys(skills).slice(3).map((key, index) => (
                        <VACSkillBtn key={index} item={skills[key]} handleHover={handleHover} />
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;