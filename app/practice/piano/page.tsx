"use client"
import React, { useRef, RefObject, useEffect, useCallback  } from 'react';
import styles from './page.module.css';

type ButtonProps = {
  note: string;
  minor?: boolean;
  invisible?: boolean;
  audioRef: RefObject<HTMLAudioElement>;
};



const Pianobutton = ({ audioRef, note, minor = false, invisible = false }: ButtonProps) => {
    const playSound = (audioRef: RefObject<HTMLAudioElement>) => () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div onMouseDown={playSound(audioRef)} className={`${styles.pianobutton} ${minor ? styles.black : styles.white} ${invisible ? styles.invisible : ''}`}>
      <p className={styles.notation}>{note}</p>
      <audio ref={audioRef} src={`/${note}.mp3`} preload="auto" style={{ display: 'none' }} />
    </div>
  );
};

const Piano = () => {
  const cRef = useRef<HTMLAudioElement>(null);
  const cMinorRef = useRef<HTMLAudioElement>(null);
  const dRef = useRef<HTMLAudioElement>(null);
  const dMinorRef = useRef<HTMLAudioElement>(null);
  const eRef = useRef<HTMLAudioElement>(null);
  const fRef = useRef<HTMLAudioElement>(null);
  const fMinorRef = useRef<HTMLAudioElement>(null);
  const gRef = useRef<HTMLAudioElement>(null);
  const gMinorRef = useRef<HTMLAudioElement>(null);
  const aRef = useRef<HTMLAudioElement>(null);
  const aMinorRef = useRef<HTMLAudioElement>(null);
  const bRef = useRef<HTMLAudioElement>(null);

  document.addEventListener('keydown', (event) => playPiano(event.key));
  let keyPiano:{ [key: string]: string} = {
    "a" : '/c.mp3',
    "s" : '/d.mp3',
    "d" : '/e.mp3',
    "f" : '/f.mp3',
    "g" : '/g.mp3',
    "h" : '/a.mp3',
    "j" : '/b.mp3',
    "w" : `/cminor.mp3`,
    "e" : `/dminor.mp3`,
    "t" : `/fminor.mp3`,
    "y" : `/gminor.mp3`,
    "u" : `/aminor.mp3`,
  }
const playPiano = useCallback((key: string) => {
  const audioFile = keyPiano[key];
  if (audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
  }
}, []); // Dependencies array is empty as playPiano does not depend on any props or state

useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    playPiano(event.key);
  };

  window.addEventListener('keydown', handleKeyDown as unknown as EventListener);

  return () => {
    window.removeEventListener('keydown', handleKeyDown as unknown as EventListener);
  };
}, [playPiano]); // Add playPiano to dependencies



  return (
    <section className={styles.piano}>
      <div className={styles.upperrow}>
        <Pianobutton audioRef={cMinorRef} minor note="cminor"/>
        <Pianobutton audioRef={dMinorRef} minor note="dminor"/>
        <Pianobutton audioRef={dMinorRef}invisible minor note="eminor"/>
        <Pianobutton audioRef={fMinorRef} minor note="fminor"/>
        <Pianobutton audioRef={gMinorRef} minor note="gminor"/>
        <Pianobutton audioRef={aMinorRef} minor note="aminor"/>
        <Pianobutton audioRef={dMinorRef} invisible minor note="bminor"/>
      </div>
      <div className={styles.bottomrow}>
        <Pianobutton audioRef={cRef} note="c"/>
        <Pianobutton audioRef={dRef} note="d"/>
        <Pianobutton audioRef={eRef} note="e"/>
        <Pianobutton audioRef={fRef} note="f"/>
        <Pianobutton audioRef={gRef} note="g"/>
        <Pianobutton audioRef={aRef} note="a"/>
        <Pianobutton audioRef={bRef} note="b"/>
      </div> 
    </section>
  )
}

export default Piano;