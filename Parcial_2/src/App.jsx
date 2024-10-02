import React from "react";
import './App.css'
import Button from "./Components/Button";
import Input from "./Components/input";
import EqualButton from "./Components/equalButton";

export default function App({ state, dispatch }) {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={state}></Input>
        <div className="row">
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "7" })}
          >
            7
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "8" })}
          >
            8
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "9" })}
          >
            9
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputOpr", param: "/" })}
          >
            /
          </Button>
        </div>
        <div className="row">
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "4" })}
          >
            4
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "5" })}
          >
            5
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "6" })}
          >
            6
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputOpr", param: "*" })}
          >
            *
          </Button>
        </div>
        <div className="row">
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "1" })}
          >
            1
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "2" })}
          >
            2
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "3" })}
          >
            3
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputOpr", param: "+" })}
          >
            +
          </Button>
        </div>
        <div className="row">
          
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "0" })}
          >
            0
          </Button>
          <Button
            onClick={() => dispatch({ type: "addtoInputNum", param: "-" })}
          >
            -
          </Button>
          <Button onClick={() => dispatch({ type: "handleClear" })}>C</Button>
        </div>
        <div className="row">
          <EqualButton onClick={() => dispatch({ type: "handleEqual" })}>
            =
          </EqualButton>
        </div>
      </div>
    </div>
  );
}
