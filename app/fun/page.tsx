import styles from "./fun.module.scss";

export default function Fun() {
    return (
        <div className={styles.pageContainer}>
            <main className={styles.content}>
                <h1 className={styles.title}>Fun</h1>
                <p className={styles.description}>Just for fun.</p>
            </main>
        </div>
    );
}

