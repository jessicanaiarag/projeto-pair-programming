import Link from "next/link";
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import profilePic from '../../public/images/logo-pair-programming.jpg'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image
                    src={profilePic}
                    width="50"
                    height="50"
                    alt="PairProgramming"
                />
                <Link href="/">
                    <a>
                     <h1>Pair Programming</h1>
                    </a>
                </Link>

            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="whoAre">
                        <a>Who we are</a>
                    </Link>
                </li>
                <li>
                    <Link href="contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}