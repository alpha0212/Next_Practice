import styles from "../styles/404.module.css";

export default function NotFound() {
    return (
<body>
    <div className={styles.ring}>GO BACK
        <span></span>
    </div>
  <style jsx>
    {`

body
{
  margin:0;
  padding:0;
  background:#fff;
}


    `}
  </style>
</body>
    )
  }