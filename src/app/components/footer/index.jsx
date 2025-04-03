import React from "react";
import styles from "./footer.module.css";

const Footer = ({footerData, socialLinks1, socialLinks2, socialLinks3, socialLinks4 }) => {
    return (
        <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <h2>MemeVerse</h2>
            <p>O universo dos melhores memes da internet.</p>
          </div>

          <div className={styles.footerNavContainer}>
            <div className={styles.footerNavSection}>
              <h3>Navegação</h3>
              <nav className={styles.footerNav}>
                <a href="#">Home</a>
                <a href="#">Trending</a>
                <a href="#">Create</a>
                <a href="#">Categories</a>
                <a href="#">Profile</a>
              </nav>
            </div>

            <div className={styles.footerNavSection}>
              <h3>Recursos</h3>
              <nav className={styles.footerNav}>
                <a href="#">Editor de Memes</a>
                <a href="#">Templates</a>
                <a href="#">API</a>
                <a href="#">Para Desenvolvedores</a>
              </nav>
            </div>

            <div className={styles.footerNavSection}>
              <h3>Empresa</h3>
              <nav className={styles.footerNav}>
                <a href="#">Sobre nós</a>
                <a href="#">Carreiras</a>
                <a href="#">Blog</a>
                <a href="#">Contato</a>
              </nav>
            </div>

            <div className={styles.footerNavSection}>
              <h3>Legal</h3>
              <nav className={styles.footerNav}>
                <a href="#">Termos de Uso</a>
                <a href="#">Privacidade</a>
                <a href="#">Cookies</a>
                <a href="#">LGPD</a>
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>{footerData}</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <span>{socialLinks1}</span>
            </a>
            <a href="#" className={styles.socialLink}>
              <span>{socialLinks2}</span>
            </a>
            <a href="#" className={styles.socialLink}>
              <span>{socialLinks3}</span>
            </a>
            <a href="#" className={styles.socialLink}>
              <span>{socialLinks4}</span>
            </a>
          </div>
        </div>
      </footer>
    );
    }

export default Footer;