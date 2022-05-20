import React, { useState } from 'react';
import { IHandle, ISkills } from '../../App';
import VACSkillBtn from '../skill_btn/VAC_skill_btn';
import styles from './skills.module.css';

const Skills = ({ skills, handleHover }: { skills: ISkills, handleHover: IHandle }) => {
    
    return (
        <div className={styles.skills}>
            <div className={styles.most}>
                <p className={styles.title}>주요 기술:</p>
                <VACSkillBtn key={0} item={skills.Javascript} handleHover={handleHover} />
                <VACSkillBtn key={1} item={skills.Typescript} handleHover={handleHover} />
                <VACSkillBtn key={2} item={skills.React} handleHover={handleHover} />
            </div>
            <div className={styles.tag}>
                <p className={styles.title}>기술 태그:</p>
                <VACSkillBtn key={3} item={skills[`C++`]} handleHover={handleHover} />
                <VACSkillBtn key={4} item={skills.CSS} handleHover={handleHover} />
                <VACSkillBtn key={5} item={skills.HTML} handleHover={handleHover} />
                <VACSkillBtn key={6} item={skills.GitHub} handleHover={handleHover} />
                <VACSkillBtn key={7} item={skills[`REST API`]} handleHover={handleHover} />
                <VACSkillBtn key={8} item={skills[`VAC Pattern`]} handleHover={handleHover} />
            </div>
        </div>
    );
};

export default Skills;