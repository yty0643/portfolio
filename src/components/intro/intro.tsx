import React from 'react';
import styles from './intro.module.css';

const Intro = ({ }) => {
    return (
        <div className={styles.intro}>
            <p className={styles.title}>윤태영</p>
            <p className={styles.subTitle}>포트폴리오</p>
            <p className={styles.description}>
                안녕하세요. 주니어 웹 개발자(프론트엔드) 윤태영입니다.<br/>
                주로 사용하는 언어는 Javascript 입니다. 이외에도 Typescript, React, CSS, HTML에 대한 개발 경험이 있으며, C++을 통해 알고리즘을 공부하고 있습니다.
                <br/>신입 개발자로 취업하기 위해 여러 개인 프로젝트를 진행하고 있으며, GitHub를 통해 소스코드를 관리하고 있습니다.<br/><br/>
                유지 보수하기 좋은 코드, 확장성 있는 설계가 가능한 개발자로 성장하고 싶습니다.
                초기에 설계방식을 충분히 고려하지 않으면 여러 사이드 이펙트가 발생하고, 확장시 많은 비용이 든다는 것을 경험하였습니다.
                작게는 변수의 이름부터 코드 중복, 크게는 디자인 패턴 등 확장성 있는 개발에 신경 쓰고 있습니다.
            </p>
        </div>
    );
};

export default React.memo(Intro);