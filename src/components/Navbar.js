import styles from "../styles/navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="index.html" className={styles.brand}>
            <img src="./images/logo-bg.png" alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <div className={styles.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
      </div>
    </nav>
  );
}

export default Navbar;
