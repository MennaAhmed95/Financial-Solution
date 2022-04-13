import { useState } from "react";
import { sec1, sec2 } from "../../data/data";
import Answer from "../Answer";
import ModalAnswer from "../ModalAnswer";
import classes from "./main.module.css";
const Main = ({ show }) => {
  const [part1, setPart1] = useState([]);
  const [part2, setPart2] = useState([]);
  const [check, setcheck] = useState(0);
  const [showSec2, setShowSec2] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleAnswer = (e) => {
    console.log(e.target.value, e.target);
    switch (e.target.value) {
      case "B. B2B":
        setcheck(2);
        break;
      case "A. B2C":
        setcheck(3);
        break;
      case "C. both":
        setcheck(4);
        break;
      default:
        break;
    }
  };
  return (
    <div className={show ? "" : classes.hid}>
      {!submit ? (
        <div className="container">
          {localStorage.setItem("part1", JSON.stringify(part1))}
          {showSec2 ? (
            ""
          ) : (
            <section>
              <h2>Section(1):</h2>
              <div className={classes.question}>
                {sec1.slice(0, 1).map((itm, i) => (
                  <div key={i}>
                    <p>
                      Q{i + 1}.{itm.question}
                    </p>
                    <Answer
                      itm={itm}
                      handleAnswer={handleAnswer}
                      handleClick={(e) => {
                        setPart1([
                          ...part1.filter((q) => q.question !== itm.question),
                          { ...itm, response: e },
                        ]);
                      }}
                    />
                  </div>
                ))}
                {check === 2
                  ? sec1.slice(1, 2).map((itm, i) => (
                      <div key={i}>
                        <p>
                          Q{i + 2}.{itm.question}
                        </p>
                        <Answer
                          itm={itm}
                          handleAnswer={handleAnswer}
                          handleClick={(e) =>
                            setPart1([
                              ...part1.filter(
                                (q) => q.question !== itm.question
                              ),
                              { ...itm, response: e },
                            ])
                          }
                        />
                      </div>
                    ))
                  : check === 3
                  ? sec1.slice(2, 3).map((itm, i) => (
                      <div key={i}>
                        <p>
                          Q{i + 2}.{itm.question}
                        </p>
                        <Answer
                          itm={itm}
                          handleAnswer={handleAnswer}
                          handleClick={(e) =>
                            setPart1([
                              ...part1.filter(
                                (q) => q.question !== itm.question
                              ),
                              { ...itm, response: e },
                            ])
                          }
                        />
                      </div>
                    ))
                  : check === 4
                  ? sec1.slice(1).map((itm, i) => (
                      <div key={i}>
                        <p>
                          Q{i + 2}.{itm.question}
                        </p>
                        <Answer
                          itm={itm}
                          handleAnswer={handleAnswer}
                          handleClick={(e) =>
                            setPart1([
                              ...part1.filter(
                                (q) => q.question !== itm.question
                              ),
                              { ...itm, response: e },
                            ])
                          }
                        />
                      </div>
                    ))
                  : ""}
              </div>
            </section>
          )}
          {((check === 2 || check === 3) && part1.length === 2) ||
          (check === 4 && part1.length === 3) ? (
            <button
              className={showSec2 ? classes.hid : classes.btn}
              onClick={() => setShowSec2(true)}
            >
              Next
            </button>
          ) : (
            ""
          )}
          {showSec2 ? (
            <section>
              <h2>Section(2):</h2>
              <div className={classes.question}>
                {sec2.slice(0, 1).map((itm, i) => (
                  <div key={i}>
                    <p>
                      Q{i + 1}.{itm.question}
                    </p>
                    <Answer
                      itm={itm}
                      handleAnswer={handleAnswer}
                      handleClick={(e) => {
                        setPart2([
                          ...part2.filter((q) => q.question !== itm.question),
                          { ...itm, response: e },
                        ]);
                      }}
                    />
                  </div>
                ))}
                {part2[0]?.response === "A. yes"
                  ? sec2.slice(1, 2).map((itm, i) => (
                      <div key={i}>
                        <p>
                          Q{i + 2}.{itm.question}
                        </p>
                        <input
                          className={classes.number}
                          type="number"
                          min="0"
                          onChange={(e) => {
                            console.log(part2, e.target.value);
                            setPart2([
                              ...part2.filter(
                                (q) => q.question !== itm.question
                              ),
                              { ...itm, response: e.target.value },
                            ]);
                          }}
                        />
                      </div>
                    ))
                  : ""}
              </div>
            </section>
          ) : (
            ""
          )}
          {(part2[0]?.response === "A. yes" && part2.length === 2) ||
          part2[0]?.response === "B. no" ? (
            <button className={classes.btn} onClick={() => setSubmit(true)}>
              Next
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <ModalAnswer part1={part1} part2={part2} />
      )}
    </div>
  );
};

export default Main;
