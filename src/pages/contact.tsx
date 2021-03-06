import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Who we are</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact us
        </h1>
        <div>
          <p>Send an email to</p>
          <p>jessicanaiarag@gmail.com</p>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact;