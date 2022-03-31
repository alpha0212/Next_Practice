import styles from "../styles/Login.module.css";

export default function login(){
    return (
    <div className={styles.box_area}>
        <form method="post" action="">
            <h1>Login</h1>
            <input type="text" name="" placeholder="ID" />
            <input type="password" name="" placeholder="PW" />
            <input type="submit" name="" value="login" />
            <div class="sunicon">
                <i class='bx bx-sun' id="icon" type="button"></i>
                <style jsx>{`
                
                `}</style>
            </div>
        </form>
    </div>
    )
}