import React, { useState } from 'react';
import styles from './App.module.css';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import University from './components/university/university';
import Contact from './components/contact/contact';
import URLBtn from './components/url_btn/url_btn';

export interface ISkill{
  isActive: boolean,
  name: string,
  color: string,
};

export interface ISkills{
  [key: string]: ISkill,
};

export interface IHover{
  (item: ISkill, isActive: boolean): void;
};

export interface IFocus{
  (isActive: boolean): void;
};

function App() {
  const [isFoucs, setIsFocus] = useState<boolean>(false);
  const [skills, setSkills] = useState<ISkills>({
    "Javascript": {
      isActive: false,
      name: "Javascript",
      color: "rgb(247, 223, 43)",
    },
    "Typescript": {
      isActive: false,
      name: "Typescript",
      color: "rgb(72, 136, 225)",
    },
    "React": {
      isActive: false,
      name: "React",
      color: "rgb(99, 221, 255)",
    },
    "C++": {
      isActive: false,
      name: "C++",
      color: "rgb(136, 170, 222)",
    },
    "CSS": {
      isActive: false,
      name: "CSS",
      color: "rgb(24, 96, 205)",
    },
    "HTML": {
      isActive: false,
      name: "HTML",
      color: "rgb(205, 57, 24)",
    },
    "GitHub": {
      isActive: false,
      name: "GitHub",
      color: "rgb(8, 29, 74)",
    },
    "REST API": {
      isActive: false,
      name: "REST API",
      color: "rgb(96, 174, 63)",
    },
    "VAC Pattern": {
      isActive: false,
      name: "VAC Pattern",
      color: "rgb(76, 84, 87)",
    },
  });

  const handleFocus: IFocus = (isActive) => {
    setIsFocus(isActive);
  };

  const handleHover: IHover = (item, isActive) => {
    setSkills(skill => {
      const temp = { ...skill };
      temp[item.name] = {
        ...temp[item.name],
        isActive,
      };
      return temp;
    });
  };

  return (
    <div className={styles.app} >
      <div className={`${styles.cover} ${isFoucs && styles.active}`}></div>
      <section className={styles.dataSection}>
        <Intro />
        <Contact />
        <Skills skills={skills} handleHover={handleHover} />
      </section>
      <section className={styles.detailSection}>
        <Projects skills={skills} handleHover={handleHover} handleFocus={handleFocus}/>
        <University />
        <div className={styles.docs}>
          <URLBtn path={"https://github.com/yty0643/portfolio"} name={"Docs"}/>
        </div>
      </section>
    </div>
  );
};

export default App;