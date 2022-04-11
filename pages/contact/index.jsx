import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../../components/Navbar'
import styles from '../../styles/Home.module.css'

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Carlos</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/"><a>Home</a></Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact.js</code>
        </p>

      </main>

    </div>
  )
}
