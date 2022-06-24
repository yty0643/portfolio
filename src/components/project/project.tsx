import React from 'react';
import { useSelector } from 'react-redux';
import { IFocus, IHover, ISkill } from '../../App';
import { RootState } from '../../app/store';
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

const Project = ({ skills, item, handleHover, handleFocus }: { skills: ISkill[], item: IItem, handleHover: IHover, handleFocus: IFocus }) => {
    const selectedIdx = useSelector((state: RootState) => state.selected.index);

    const skillsIdx = item.skills.map((item) => {
        let temp: number = 0;
        skills.map((item2) => {
            if (item2.name == item)
                temp = item2.key;
        })
        return temp;
    });
    
    return (
        <div className={styles.project}>
            <div className={styles.skills}>
                {skillsIdx.map((idx, index) => (
                    <SkillBtn key={index + 100} item={skills[idx]} isActive={selectedIdx==idx} handleHover={handleHover} />
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