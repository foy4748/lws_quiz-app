import styles from "../styles/result.module.css";
import stylesQuiz from "../styles/quiz.module.css";

export default function Result() {
  return (
    <main className="main">
      <div className="container">
        <div className={styles.summary}>
          <div className={styles.point}>
            <p className={styles.score}>
              Your score is <br />5 out of 10
            </p>
          </div>

          <div className={styles.badge}>
            <img src="./images/success.png" alt="Success" />
          </div>
        </div>

        <div className={styles.analysis}>
          <h1>Question Analysis</h1>
          <h4>You answerd 5 out of 10 questions correctly</h4>

          <div className={styles.question}>
            <div className={styles.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <div className={stylesQuiz.answers}>
              <label className={stylesQuiz.answer} for="option1">
                A New Hope 1
              </label>

              <label className={stylesQuiz.answer} for="option2">
                A New Hope 1
              </label>

              <label className={stylesQuiz.answer} for="option3">
                A New Hope 1
              </label>

              <label
                className={`${stylesQuiz.answer} ${stylesQuiz.wrong}`}
                for="option4"
              >
                <span>A New Hope 1</span>
                <span>Your answer</span>
              </label>

              <label className={stylesQuiz.answer} for="option5">
                A New Hope 1
              </label>

              <label className={stylesQuiz.answer} for="option6">
                A New Hope 1
              </label>

              <label
                className={`${stylesQuiz.answer} ${stylesQuiz.correct}`}
                for="option7"
              >
                <span>A New Hope 1</span>
                <span>Correct answer</span>
              </label>

              <label className={stylesQuiz.answer} for="option8">
                A New Hope 1
              </label>

              <label className={stylesQuiz.answer} for="option9">
                A New Hope 1
              </label>

              <label className={stylesQuiz.answer} for="option10">
                A New Hope 1
              </label>
            </div>
          </div>

          <div className={styles.question}>
            <div className={styles.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <div className={stylesQuiz.answers}>
              <label className={stylesQuiz.answer} for="option1">
                A New Hope 1
              </label>

              <label className={stylesQuiz.answer} for="option2">
                A New Hope 1
              </label>

              <label className={stylesQuiz.answer} for="option3">
                A New Hope 1
              </label>

              <label
                className={`${stylesQuiz.answer} ${stylesQuiz.wrong}`}
                for="option4"
              >
                <span>A New Hope 1</span>
                <span>Your answer</span>
              </label>

              <label className={stylesQuiz.answer} for="option5">
                A New Hope 1
              </label>

              <label className={stylesQuiz.answer} for="option6">
                A New Hope 1
              </label>

              <label
                className={`${stylesQuiz.answer} ${stylesQuiz.correct}`}
                for="option7"
              >
                <span>A New Hope 1</span>
                <span>Correct answer</span>
              </label>

              <label className={stylesQuiz.answer} for="option8">
                A New Hope 1
              </label>

              <label className={stylesQuiz.answer} for="option9">
                A New Hope 1
              </label>

              <label className={stylesQuiz.answer} for="option10">
                A New Hope 1
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
