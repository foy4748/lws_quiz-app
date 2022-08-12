import styles from "../styles/quiz.module.css";

function Quiz() {
  return (
    <main className="main">
      <div className="container">
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>

        <div className={styles.answers}>
          <label className={styles.answer} for="option1">
            <input type="checkbox" id="option1" />A New Hope 1
          </label>

          <label className={styles.answer} for="option2">
            <input type="checkbox" id="option2" />A New Hope 1
          </label>

          <label className={styles.answer} for="option3">
            <input type="checkbox" id="option3" />A New Hope 1
          </label>

          <label className={`${styles.answer} ${styles.wrong}`} for="option4">
            <input type="checkbox" id="option4" />A New Hope 1
          </label>

          <label className={styles.answer} for="option5">
            <input type="checkbox" id="option5" />A New Hope 1
          </label>

          <label className={styles.answer} for="option6">
            <input type="checkbox" id="option6" />A New Hope 1
          </label>

          <label className={`${styles.answer} ${styles.correct}`} for="option7">
            <input type="checkbox" id="option7" />A New Hope 1
          </label>

          <label className={styles.answer} for="option8">
            <input type="checkbox" id="option8" />A New Hope 1
          </label>

          <label className={styles.answer} for="option9">
            <input type="checkbox" id="option9" />A New Hope 1
          </label>

          <label className={styles.answer} for="option10">
            <input type="checkbox" id="option10" />A New Hope 1
          </label>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.backButton}>
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className={styles.rangeArea}>
            <div className={styles.tooltip}>24% Cimplete!</div>
            <div className={styles.srangeBody}>
              <div className={styles.progress} style={{ width: "20%" }}></div>
            </div>
          </div>
          <a href="result.html">
            <button className={`button ${styles.next}`}>
              <span>Next Question</span>
              <span className={styles["material-icons-outlined"]}>
                arrow_forward
              </span>
            </button>
          </a>
        </div>

        <div className={`${styles.miniPlayer} ${styles.floatingBtn} `}>
          <span
            className={`${styles["material-icons-outlined"]} ${styles.open}`}
          >
            play_circle_filled
          </span>
          <span
            className={`${styles["material-icons-outlined"]} ${styles.close}`}
          >
            close
          </span>
          <img src="./images/3.jpg" alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
      </div>
    </main>
  );
}

export default Quiz;
