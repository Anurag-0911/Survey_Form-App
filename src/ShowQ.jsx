import React, { useState } from "react";
import qna from "./Question";
import {  useNavigate } from "react-router-dom";
import "./ShowQ.css"

var ansarr = [];

const ShowQ = () => {


    // const [ans, setans] = useState("-1")
    const navigate = useNavigate();
    const [idx, nxtidx] = useState(0);
    const [option, setoption] = useState("-1");
    const [qno, set_qno] = useState(1);
    const nxt_page = (event) => {
        setoption(event.target.value);
    };

    return (
        <>
            <div className="question-container">
                <h1 className="question">Q.{qno} {qna[idx].question}</h1>
                <label className="options">
                    <input
                        type="radio"
                        name="option"
                        value="0"
                        onChange={nxt_page}
                        checked={option === "0"}
                    />
                    {qna[idx].option1}
                </label>
                <br />
                <label className="options">
                    <input
                        type="radio"
                        name="option"
                        value="1"
                        onChange={nxt_page}
                        checked={option === "1"}
                    />
                    {qna[idx].option2}
                </label>
                <br />
                <label className="options">
                    <input
                        type="radio"
                        name="option"
                        value="2"
                        onChange={nxt_page}
                        checked={option === "2"}
                    />
                    {qna[idx].option3}
                </label>
                <br />
                <label className="options">
                    <input
                        type="radio"
                        name="option"
                        value="3"
                        onChange={nxt_page}
                        checked={option === "3"}
                    />
                    {qna[idx].option4}
                </label>

                <button className="next-button" onClick={() => {
                    if (idx < 9) {
                        ansarr.push(option);
                        console.log(ansarr)
                        nxtidx(idx + 1);
                        setoption("-1");
                        set_qno(qno + 1);

                    }
                    else {
                        ansarr.push(option);
                        console.log(ansarr)
                        localStorage.setItem("userans", ansarr);
                        navigate("/end")

                    }
                }}>NEXT</button>
            </div>
        </>

    )
};

export default ShowQ;




