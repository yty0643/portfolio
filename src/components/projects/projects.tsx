import React, { useState } from 'react';
import { IHandle, ISkills } from '../../App';
import Project, { IItem } from '../project/project';
import styles from './projects.module.css';

const Projects = ({ skills, handleHover }: { skills: ISkills, handleHover: IHandle }) => {
    const projects: IItem[] = [{
        skills: ["Typescript", "React", "GitHub", "VAC Pattern", "REST API", "CSS", "HTML"],
        title: "습관관리 웹", subTitle: "프론트엔드",
        description: "VAC Pattern 설계 방식 이해 및 Typescript, React의 개발 역량을 향상을 위한 프로젝트",
        list: ["Firebase를 통한 DB 및 인증 관리", "VAC Pattern을 적용한 코드 설계", "Typescript, React로 개발", "GitHub로 버전 및 소스코드 관리"],
        path: "https://github.com/yty0643/habit-manager",
    },
    {
        skills: ["Javascript", "React", "GitHub", "REST API", "CSS", "HTML"],
        title: "커밋예약 웹", subTitle: "프론트엔드",
        description: "REST API 활용 및 Javascript, React의 개발 역량을 향상을 위한 프로젝트",
        list: ["Firebase를 통한 DB 및 인증 관리", "GitHub API를 활용한 커밋 및 저장소 데이터 확인", "react-simple-tree-menu 라이브러리를 활용하여 트리형 디렉터리 구조 개발", "GitHub로 버전 및 소스코드 관리"],
        path: "https://github.com/yty0643/crw",
    },
    {
        skills: ["C++"],
        title: "알고리즘", subTitle: "알고리즘 풀이",
        description: "문제 해결 능력 강화를 위한 알고리즘 풀이",
        list: ["다양한 알고리즘 문제를 C++을 활용해 해결 함"],
        path: "https://github.com/yty0643/algorithm",
    }];

    return (
        <div className={styles.projects}>
            <div className={styles.titleBox}>
                <p className={styles.title}>개인 프로젝트</p>
                <p className={styles.description}>클릭 시 깃허브 저장소로 이동합니다.</p>
            </div>
            {projects.map((item, index) => (
                <Project key={index + 1000} skills={skills} handleHover={handleHover} item={item}/>                
            ))}
        </div>
    );
};

export default Projects;