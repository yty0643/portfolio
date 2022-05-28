import React from 'react';
import { IFocus, IHover, ISkills } from '../../App';
import SkillBtn from '../skill_btn/skill_btn';
import styles from './project.module.css';

export interface IItem{
    skills: string[],
    title: string,
    subTitle: string,
    description: string,
    list: string[],
    path: string,
    video: string,
}

const Project = ({ skills, item, handleHover, handleFocus }: { skills: ISkills, item: IItem, handleHover: IHover, handleFocus: IFocus }) => {
    return (
        <div className={styles.project}>
            <div className={styles.skills}>
                {item.skills.map((item, index) => (
                    <SkillBtn key={index + 100} item={skills[item]} handleHover={handleHover} />
                ))}
            </div>
            <div
                className={styles.info}
                onClick={() => {
                    window.open(item.path);
                }}
                onMouseEnter={() => {
                    handleFocus(true, item.video);
                }}
                onMouseLeave={() => {
                    handleFocus(false, "");
                }}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.subTitle}>{item.subTitle}</p>
                <p className={styles.description}>{item.description}</p>
                <ul className={styles.list}>
                    {item.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Project;