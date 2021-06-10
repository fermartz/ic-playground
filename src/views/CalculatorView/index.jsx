import React, { useState, useCallback, useEffect } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import { playground } from "../../agent";

function CalculatorView() {
  const [val, setVal] = useState(0);
  const [inputNum, setInputNum] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const refreshCalculator = useCallback(async () => {
    const result = await playground.getCalculatorResult();
    setVal(result.toString());
  }, []);

  useEffect(() => {
    refreshCalculator();
  }, []);
  const handleInputNum = (v) => {
    console.log(isNaN(v));

    if (isNaN(v)) {
      setErrorMsg("Please enter a valid number");
    } else {
      setErrorMsg("");
      setInputNum(parseInt(v));
    }

    // setInputNum(parseInt(v));
  };
  const doCalculation = useCallback(
    async (sign, n) => {
      console.log("the sign is", sign, n);
      setVal("...");

      if (sign === "+") {
        await playground.add(n);
      }
      if (sign === "-") {
        await playground.sub(n);
      }
      if (sign === "*") {
        await playground.mul(n);
      }
      if (sign === "/") {
        await playground.div(n);
      }
      if (sign === "") {
        await playground.clearall();
      }

      refreshCalculator();
    },
    [playground]
  );

  return (
    <div>
      <div className="flex flex-col justify-center content-center">
        <p className="text-5xl text-purple-700">{val}</p>
        <div>
          <input
            className="px-3 py-3 my-8 w-48 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 "
            defaultValue={isNaN(inputNum) ? 0 : inputNum}
            onChange={(e) => handleInputNum(e.target.value)}
            placeholder="enter a number"
          ></input>
        </div>
        <p className="mb-8 text-base text-indigo-700">{errorMsg}</p>
      </div>
      {errorMsg === "" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div>
              <button
                className="px-8 py-2 w-40 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
                aria-label="Increment value"
                onClick={() => doCalculation("+", inputNum)}
              >
                Add
              </button>
            </div>
          </div>
          <div>
            <div>
              <button
                className="px-8 py-2 w-42 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
                aria-label="Increment value"
                onClick={() => doCalculation("-", inputNum)}
              >
                Substract
              </button>
            </div>
          </div>
          <div>
            <div>
              <button
                className="px-8 py-2 w-40 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
                aria-label="Increment value"
                onClick={() => doCalculation("*", inputNum)}
              >
                Multiply
              </button>
            </div>
          </div>
          <div>
            <div>
              <button
                className="px-8 py-2 w-40 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
                aria-label="Increment value"
                onClick={() => doCalculation("/", inputNum)}
              >
                Divide
              </button>
            </div>
          </div>
          <div>
            <div>
              <button
                className="px-8 py-2 w-40 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
                aria-label="Increment value"
                onClick={() => doCalculation("", inputNum)}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalculatorView;
