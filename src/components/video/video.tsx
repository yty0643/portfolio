import React, { useEffect, useRef } from 'react';
import styles from './video.module.css';

const Video = ({ video }: { video: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2.5;
    }, [video]);

    return (
        <video className={styles.video} ref={videoRef} src={video} width="500px" height="650px" loop autoPlay muted />
    );
};

export default Video;