import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            {/* Background Glows */}
            <div className={styles.glowPurple} />
            <div className={styles.glowBlue} />

            <h1 className={styles.heading}>
                Hi, I'm <span className={styles.nameGradient}>Saurabh Maske</span>
            </h1>
            <p className={styles.description}>
                Frontend Engineer specializing in React & Next.js.
            </p>

            <div className={styles.actions}>
                <Link href="/projects" className={styles.btnProject}>
                    View Projects
                </Link>
                <Link href="/contact" className={styles.btnContact}>
                    Contact Me
                </Link>
            </div>
        </div>
    );
}

