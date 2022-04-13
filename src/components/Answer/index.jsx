import classes from "./../Main/main.module.css";

const Answer = ({ itm, handleAnswer, handleClick }) => {
  console.log(itm, "ans");
  return (
    <div className={classes.answer}>
      {itm?.answers?.map((item) => (
        <div key={item}>
          <input
            type="radio"
            name={itm.question}
            value={item}
            onChange={handleAnswer}
            onClick={(e) => handleClick(e.target.value)}
          />
          {item}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Answer;
