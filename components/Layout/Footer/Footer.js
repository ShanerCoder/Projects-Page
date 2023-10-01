import Image from "next/image";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <a
        href="https://github.com/ShanerCoder"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
        <span className={classes.logo}>
          <Image src="/GitHub.png" alt="GitHub Logo" width={16} height={16} />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
