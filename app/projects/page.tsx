import styles from "./projects.module.scss";

export default function Projects() {
    return (
        <div className={styles.pageContainer}>
            <main className={styles.content}>
                <h1 className={styles.title}>Projects</h1>
                <p className={styles.description}>My work.</p>
            </main>
        </div>
    );
}

