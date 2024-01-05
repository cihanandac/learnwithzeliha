import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.mainsection}>
      <section className={styles.imagesection}>
        <Image className='background-image' src="/mainpage.jpg" alt='teacherinclass' fill style={{width:'100%', height:'100%'}}/>
      </section>
      <section className={styles.caption}>
        <div>
          Lorem ipsum dolor sit amet sollicitudin cursus convallis libero habitasse sagittis et mattis vel.
        </div>
        <div>
          Lobortis tincidunt mauris ultricies sapien vitae diam nunc quis dui senectus dolore nunc vitae sodales.
        </div>
      </section>
    </main>
  )
}
