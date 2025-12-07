import styles from "./projects.module.scss";
import { projects } from "../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
    return (
        <div className={styles.pageContainer}>
            <main className={styles.content}>
                <div className={styles.grid}>
                    <div className={styles.infoCard}>
                        <h1 className={styles.title}>
                            <span className={styles.smallTitle}>MY WORK</span>
                            Checkout my Projects!
                        </h1>
                        <p className={styles.description}>
                            We develop the best quality website that serves for the long-term. 
                            Well-documented, clean, easy and elegant interface helps any non-technical clients.
                        </p>
                    </div>

                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </main>
        </div>
    );
}
