import React, { useCallback, useState } from 'react';
import styles from './App.module.css';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import University from './components/university/university';
import Contact from './components/contact/contact';
import URLBtn from './components/url_btn/url_btn';
import Video from './components/video/video';
import { useDispatch } from 'react-redux';
import { mouseHover } from './features/selected/selected_slice';


export interface ISkill{
  key: number,
  name: string,
  color: string,
};

export interface IHover{
  (key: number): void;
};

export interface IFocus{
  (isActive: boolean, video: string|null): void;
};

function App() {
  const dispatch = useDispatch();
  const [isFoucs, setIsFocus] = useState<boolean>(false);
  const [video, setVideo] = useState<string>("");
  const [skills] = useState<ISkill[]>([
    {
      key: 0,
      name: "Javascript",
      color: "rgb(247, 223, 43)",
    },
    {
      key: 1,
      name: "Typescript",
      color: "rgb(72, 136, 225)",
    },
    {
      key: 2,
      name: "React",
      color: "rgb(99, 221, 255)",
    },
    {
      key: 3,
      name: "C++",
      color: "rgb(136, 170, 222)",
    },
    {
      key: 4,
      name: "CSS",
      color: "rgb(24, 96, 205)",
    },
    {
      key: 5,
      name: "HTML",
      color: "rgb(205, 57, 24)",
    },
    {
      key: 6,
      name: "GitHub",
      color: "rgb(8, 29, 74)",
    },
    {
      key: 7,
      name: "REST API",
      color: "rgb(96, 174, 63)",
    },
    {
      key: 8,
      name: "VAC Pattern",
      color: "rgb(76, 84, 87)",
    },
    {
      key: 9,
      name: "Redux",
      color: "rgb(120, 79, 123)",
    },
    {
      key: 10,
      name: "RTK",
      color: "rgb(120, 79, 123)",
    },
    {
      key: 11,
      name: "Axios",
      color: "rgb(81, 78, 131)",
    },
    {
      key: 12,
      name: "Firebase",
      color: "rgb(246, 198, 24)",
    },
    {
      key: 13,
      name: "AWS-Amplify",
      color: "rgb(233, 145, 21)",
    }
  ]);

  const handleFocus: IFocus = useCallback((isActive, tempVideo) => {
    setIsFocus(isActive);
    if (tempVideo) setVideo(tempVideo);
    else setVideo('');
  }, []);

  const handleHover: IHover = useCallback((key) => {
    dispatch(mouseHover(key));
  }, []);

  return (
    <div className={styles.app} >
      <div className={`${styles.cover} ${isFoucs && styles.active}`}></div>
      <section className={styles.dataSection}>
        <Intro />
        <Contact />
        <Skills skills={skills} handleHover={handleHover} />
        <Video video={video} />
      </section>
      <section className={styles.detailSection}>
        <Projects skills={skills} handleHover={handleHover} handleFocus={handleFocus} />
        <University />
        <div className={styles.docs}>
          <URLBtn path={"https://github.com/yty0643/portfolio"} name={"Docs"} />
        </div>
      </section>
    </div>
  );
};

export default App;
