import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function graph(){
    return (
    <div className={styles.menu_S_lst}>
      <div class="menu_S_lst">
        <Link href="student/S1"><a><span class={styles.S1}>스원학생</span></a></Link>
        <Link href="student/S2"><a><span class={styles.S2}>스투학생</span></a></Link>
        <Link href="student/S3"><a><span class={styles.S3}>스삼학생</span></a></Link>
        <Link href="student/S4"><a><span class={styles.S4}>스포학생</span></a></Link>
      </div>
    </div>
    )
}