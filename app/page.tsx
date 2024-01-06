'use client'
import React, { useRef, RefObject } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {

  const maracasRef = useRef<HTMLAudioElement>(null);
  const pianoRef = useRef<HTMLAudioElement>(null);
  const violinRef = useRef<HTMLAudioElement>(null);
  const snareRef = useRef<HTMLAudioElement>(null);
  
  const playSound = (audioRef: RefObject<HTMLAudioElement>) => () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const stopSound =  (audioRef: RefObject<HTMLAudioElement>) => () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };


  return (
    <main className={styles.mainsection}>
      <section className={styles.imagesection}>
        <Image className='background-image' src="/mainpage.png" alt='teacherinclass' fill/>
      </section>
      <section className={styles.caption}>
        <div onMouseLeave={stopSound(maracasRef)} onMouseEnter={playSound(maracasRef)} className={styles.instrumentsection} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Image className={styles.instrument} src='/maracas.png' alt='maracas' width={150} height={150} />
          <Link className={styles.instrumentlabel} href={`/about`} key={'about'}>About Me</Link>
          <audio ref={maracasRef} src={'maracas.wav'} preload="auto" style={{ display: 'none' }} />
        </div>
        <div onMouseLeave={stopSound(pianoRef)} onMouseEnter={playSound(pianoRef)} className={styles.instrumentsection} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Image className={styles.instrument} src='/piano.png' alt='piano' width={150} height={150} />
          <Link className={styles.instrumentlabel}  href={`/portfolio`} key={'portfolio'}>Portfolio</Link>
          <audio ref={pianoRef} src={'piano.wav'} preload="auto" style={{ display: 'none' }} />
        </div>
        <div onMouseLeave={stopSound(violinRef)} onMouseEnter={playSound(violinRef)} className={styles.instrumentsection} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Image className={styles.instrument} src='/violin.png' alt='violin' width={150} height={150} />
          <Link className={styles.instrumentlabel}  href={`/practice`} key={'practice'}>Music Practice</Link>
          <audio ref={violinRef} src={'violin.wav'} preload="auto" style={{ display: 'none' }} />
        </div>
        <div onMouseLeave={stopSound(snareRef)} onMouseEnter={playSound(snareRef)} className={styles.instrumentsection} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Image className={styles.instrument} src='/trampet.png' alt='snare' width={150} height={150} />
          <Link className={styles.instrumentlabel} href={`/lesson`} key={'lesson'}>Lessons</Link>
          <audio ref={snareRef} src={'snare.wav'} preload="auto" style={{ display: 'none' }} />
        </div>
      </section>
    </main>
  )
}
