import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerContent}>
                <p>
                    Дипломный проект
                </p>
            </section>
        </footer>
    )
};

export default Footer;