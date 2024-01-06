import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <section className={styles.aboutme}>
            <div className={styles.description}>
                <p>{`Experienced music educator with 11 years of teaching experience across primary and secondary school levels. Distinguished with multiple Certificates of Outstanding Achievement and Achievement awards. Proficient in violin instruction and adept at establishing choirs, orchestras, and marching bands. Committed to fostering a love for music and honing students' talents to their fullest potential.`}</p>
            </div>
            <div className={styles.image}>
                <Image src={'/classroom.png'} alt='classroom photo' fill/>

            </div>

    </section>
  )
}

export default page