import styles from "./contact.module.scss";

export default function Contact() {
    return (
        <div className={styles.pageContainer}>
            <main className={styles.content}>
                <h1 className={styles.title}>Contact</h1>
                <p className={styles.description}>Get in touch.</p>
            </main>
        </div>
    );
}

