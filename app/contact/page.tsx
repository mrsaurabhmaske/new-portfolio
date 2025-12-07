import styles from "./contact.module.scss";
import { 
    IoLocationOutline, 
    IoCallOutline, 
    IoMailOutline, 
    IoLogoFacebook, 
    IoLogoTwitter, 
    IoLogoLinkedin, 
    IoLogoGithub,
    IoPersonCircleOutline,
    IoChatbubblesOutline 
} from "react-icons/io5";

export default function Contact() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>
                
                {/* Left Side: Info */}
                <div className={styles.infoSection}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>
                            Have a new<br />
                            Project Idea?<br />
                            Please Drop a<br />
                            Message
                        </h1>
                    </div>
                    
                    <p className={styles.subtitle}>
                        Get in touch and let me know how I can help. Fill out the form and I will 
                        be in touch as soon as possible.
                    </p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <IoLocationOutline className={styles.icon} />
                            <div className={styles.detailText}>
                                <strong>Address:</strong>
                                <span>Wardha, Maharashtra, India</span>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <IoCallOutline className={styles.icon} />
                            <div className={styles.detailText}>
                                <strong>Phone:</strong>
                                <a href="tel:+919689554113">(+91) 9689554113</a>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <IoMailOutline className={styles.icon} />
                            <div className={styles.detailText}>
                                <strong>Email:</strong>
                                <a href="mailto:saurabh.r.maske@gmail.com">saurabh.r.maske@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink} aria-label="Facebook">
                            <IoLogoFacebook />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                            <IoLogoTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/saurabh-maske" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                            <IoLogoLinkedin />
                        </a>
                        <a href="https://github.com/mrsaurabhmaske" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                            <IoLogoGithub />
                        </a>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className={styles.formCard}>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <div className={styles.inputWrapper}>
                                <IoPersonCircleOutline className={styles.inputIcon} />
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="e.g Saurabh Maske" 
                                    className={styles.input} 
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <div className={styles.inputWrapper}>
                                <IoMailOutline className={styles.inputIcon} />
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="e.g saurabh@gmail.com" 
                                    className={styles.input} 
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone</label>
                            <div className={styles.inputWrapper}>
                                <IoCallOutline className={styles.inputIcon} />
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    className={styles.input} 
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <div className={`${styles.inputWrapper} ${styles.textareaWrapper}`}>
                                <IoChatbubblesOutline className={styles.inputIcon} />
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder="Write message..." 
                                    className={styles.textarea} 
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Send
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
