import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/ShanerCoder"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
        <span className={styles.logo}>
          <Image src="/GitHub.png" alt="GitHub Logo" width={16} height={16} />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
