import React, { useState } from 'react';
import { IFocus, IHover, ISkills } from '../../App';
import Project, { IItem } from '../project/project';
import styles from './projects.module.css';
import habit_video from '../../habit.mp4';
import crw_video from '../../crw.mp4';
import receipt_video from '../../receipt.mp4';

const Projects = ({ skills, handleHover, handleFocus }: { skills: ISkills, handleHover: IHover, handleFocus: IFocus }) => {
    const projects: IItem[] = [
        {
            skills: ["Redux", "RTK", "Typescript", "React", "GitHub", "REST API", "CSS"],
            title: "계좌 거래내역 통계 웹", subTitle: "프론트엔드",
            description: "Redux, RTK 을 활용한 개발 경험 및 REST API를 다루며 CORS, Proxy server, Ajax 관련 문제를 해결 및 기록하고, 개발 역량을 강화하기 위한 프로젝트",
            list: ["Redux, RTK 라이브러리를 활용한 상태 관리", "금융결제원 API를 활용해 계좌 정보 조회", "CORS 개념 이해 및 문서 정리, proxy server를 활용한 교차 출처 리소스 접근", "라이브러리 도움 없이 Bar Chart, Line Chart, Donut Chart 구현", "Typescript, React로 개발", "GitHub로 버전 및 소스코드 관리"],
            path: "https://github.com/yty0643/smart-receipt",
            video: receipt_video,
        },
        {
            skills: ["Typescript", "React", "GitHub", "VAC Pattern", "REST API", "CSS"],
            title: "습관관리 웹", subTitle: "프론트엔드",
            description: "VAC Pattern 설계 방식 이해 및 Typescript, React의 개발 역량을 향상을 위한 프로젝트",
            list: ["Firebase를 통한 DB 및 인증 관리", "VAC Pattern을 적용한 코드 설계", "Typescript, React로 개발", "GitHub로 버전 및 소스코드 관리"],
            path: "https://github.com/yty0643/habit-manager",
            video: habit_video,
        },
        {
            skills: ["Javascript", "React", "GitHub", "REST API", "CSS"],
            title: "커밋예약 웹", subTitle: "프론트엔드",
            description: "REST API 활용 및 Javascript, React의 개발 역량을 향상을 위한 프로젝트",
            list: ["Firebase를 통한 DB 및 인증 관리", "GitHub API를 활용한 커밋 및 저장소 데이터 확인", "react-simple-tree-menu 라이브러리를 활용하여 트리형 디렉터리 구조 개발", "GitHub로 버전 및 소스코드 관리"],
            path: "https://github.com/yty0643/crw",
            video: crw_video,
        },
        {
            skills: ["C++"],
            title: "알고리즘", subTitle: "알고리즘 풀이",
            description: "문제 해결 능력 강화를 위한 알고리즘 풀이",
            list: ["다양한 알고리즘 문제를 C++을 활용해 해결 함"],
            path: "https://github.com/yty0643/algorithm",
            video: "",
        },
        {
            skills: ["Redux", "RTK"],
            title: "개발 문서", subTitle: "공부한 내용 중에 중요하다고 생각되는 내용은 마크다운 문서로 작성하여 깃허브로 관리하고 있습니다.",
            description: "가장 최근에 공부한 내용은 Redux, Redux-toolkit 입니다. 다음 프로젝트에 적용하기 위해 이론부터 꼼꼼하게 공부하고 있습니다.",
            list: ["Redux", "Redux-toolkit", "useReducer", "VAC-pattern"],
            path: "https://github.com/yty0643/development-documents",
            video: "",
        }
    ];

    return (
        <div className={styles.projects}>
            <div className={styles.titleBox}>
                <p className={styles.title}>개인 프로젝트</p>
                <p className={styles.description}>마우스 호버 시 동영상이 재생됩니다. (클릭 시 깃허브)</p>
            </div>
            {projects.map((item, index) => (
                <Project
                    key={index + 1000}
                    skills={skills}
                    item={item}
                    handleHover={handleHover}
                    handleFocus={handleFocus}
                />                
            ))}
        </div>
    );
};

export default Projects;