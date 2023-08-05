import React, { useState } from "react";
import qna from "./Question";

const ShowQ = () => {

    
    const [idx, nxtidx] = useState(0);
    const [option,setoption] = useState(null);
    const [qno,set_qno] = useState(1);
    const nxt_page = (event) => {
        setoption(event.target.value);
    };

    return (
        <>
            <div>
                <h1>Q.{qno} {qna[idx].question}</h1>
                <label>
                    <input 
                    type="radio" 
                    name="option" 
                    value="Option 1"
                    onChange={nxt_page}
                    checked={option === "Option 1"}
                    />
                    {qna[idx].option1}
                </label>
                <br />
                <label>
                    <input 
                    type="radio" 
                    name="option" 
                    value="Option 2"
                    onChange={nxt_page}
                    checked={option === "Option 2"}
                    />
                    {qna[idx].option2}
                </label>
                <br />
                <label>
                    <input 
                    type="radio" 
                    name="option" 
                    value="Option 3"
                    onChange={nxt_page}
                    checked={option === "Option 3"}
                    />
                    {qna[idx].option3}
                </label>
                <br />
                <label>
                    <input 
                    type="radio" 
                    name="option"
                    value="Option 4" 
                    onChange={nxt_page}
                    checked={option === "Option 4"}
                    />
                    {qna[idx].option4}
                </label>
                <button onClick={() => {
                    nxtidx(idx-1)
                    setoption(null);
                    set_qno(qno-1)
                }} disabled={qno===1}>PREV</button>
                <button onClick={() => {
                    
                    nxtidx(idx+1);
                    setoption(null);
                    set_qno(qno+1);
                }} disabled={qno===qna.length}>NEXT</button>
            </div>
        </>
        
    )
};

export default ShowQ;
