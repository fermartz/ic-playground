import React, { useCallback, useState } from "react";
import { playground } from "../../agent";

function PhonebookView() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState("");
  const handleInsert = useCallback(async (name, phone) => {
    if (name !== "" && phone !== "") {
      console.log("handle insert", name, phone);
      await playground.insert(name, phone);
    } else {
      console.log("bad insert");
    }
  });
  const handleQuery = useCallback(async (q) => {
    console.log("lookup for", q);
    setQueryResult("...in progress");
    let result = await playground.lookup(q);
    setQueryResult(result);
  });
  return (
    <div className="flex flex-col">
      <div className="mx-auto my-6  w-9/12 border border-gray-400 rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="flex justify-center">
            {/* <p className="text-base text-purple-700 mr-11">{`${name} ${phone}`}</p> */}
            <input
              className="px-3 py-3 w-9/12 md:w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 "
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="name"
            />
          </div>

          <div className="flex justify-center">
            <input
              className="px-3 py-3  w-9/12 md:w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 "
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="phone"
            />
          </div>
        </div>
        <button
          className="px-8 py-2 mb-6 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
          aria-label="Increment value"
          onClick={() => handleInsert(name, phone)}
        >
          Insert
        </button>
      </div>
      <div className="mx-auto my-6  w-9/12 border border-gray-400 rounded">
        <div className="grid grid-cols-1 gap-8 p-6">
          <div className="flex justify-center">
            <input
              className="px-3 py-3 w-9/12 md:w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 "
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="enter name to query phone number"
            />
          </div>

          <div className="flex justify-center">
            <button
              className="px-8 py-2 mb-6 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
              aria-label="Increment value"
              onClick={() => handleQuery(query)}
            >
              Query
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-base text-purple-700 mr-11">{`${queryResult}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhonebookView;
