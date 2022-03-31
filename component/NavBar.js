import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {

  const router = useRouter();
  return (
    <nav>
      <header className={styles.head_nav}>
        <div className={styles.text_div}>
            <p className={styles.head_text}>
              <Link href="/">
                <a>Web New Design</a>
              </Link>
            </p>
        </div>
        <hr className={styles.cut_line}/>
      </header>
      <div className={styles.menu_div}>
        <p className={styles.menu}>
          <Link href="/login"><a><span className={styles.menu_text}>로그인</span></a></Link>
          <Link href="/Graph"><a>
            <span className={styles.menu_text}>그래프</span>
          </a></Link>
        </p>
        <hr className={styles.menu_line}></hr>
      </div>
    

      
      <style jsx>{`
        
        
      `}</style>
    </nav>
  );
}