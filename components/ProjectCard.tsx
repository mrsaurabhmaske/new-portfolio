import Image from "next/image";
import { Project } from "../app/data/projects";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                {/* fallback to simple img tag if Next/Image fails with missing assets in dev, 
                    but using Next/Image is better practice. 
                    Since we know assets might be missing, we can use unoptimized to prevent build errors if they aren't generated yet 
                    or just standard img for simplicity in this migration phase if we want to be safe. 
                    Let's use a standard img tag for now to avoid 'deployment' issues if width/height not known, 
                    or we need to set width/height. 
                    Actually, let's use a simple img to handle the 'missing file' case more gracefully visually (it'll just break).
                */}
                <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                
                {project.features && (
                    <div className={styles.tags}>
                        {project.features.map((feature, index) => (
                            <span key={index} className={styles.tag}>
                                {feature}
                            </span>
                        ))}
                    </div>
                )}

                <div className={styles.footer}>
                    {project.githubLink && project.githubLink !== "#" && (
                        <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <span>GitHub</span>
                            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                    
                    {project.demoLink && (
                        <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <span>Live Demo</span>
                            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
