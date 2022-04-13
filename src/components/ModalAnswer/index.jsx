import classes from "./../Main/main.module.css";

const ModalAnswer = ({ part1, part2 }) => {
  return (
    <div className="container">
      <h2>Your Answer :</h2>
      {part1?.map((itm) => (
        <div className={classes.question} key={itm}>
          <p>{itm.question}</p>
          <p>{itm.response}</p>
        </div>
      ))}
      {part2?.map((itm) => (
        <div className={classes.question} key={itm}>
          <p>{itm.question}</p>
          <p>{itm.response}</p>
        </div>
      ))}
      <button
        className={classes.btn}
        onClick={() => alert(`your answers are submitted successfully`)}
      >
        Submit
      </button>
    </div>
  );
};

export default ModalAnswer;
