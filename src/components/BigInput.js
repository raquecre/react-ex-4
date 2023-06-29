//https://es.legacy.reactjs.org/docs/forms.html
import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const BigInput = ({ onQuery }) => {
    function handleInput(e){
        onQuery(e.target.value);
    }
    
    return (
        <div className="BigInput">
            <h2>Big BigInput</h2>
            <div className="limit">
                <label>
                    Limit =
                    <input type="number" onInput={ handleInput} />
                </label>
            </div>

        </div>
    )
}

export default BigInput;