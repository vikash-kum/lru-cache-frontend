import axios from "axios";
import React, { useState } from "react";
import { API_BASE_URL } from "../Contant";

const GetKeyCompoenet = () => {
  const [retrievedValue, setRetrievedValue] = useState("");
  const [getKey, setGetKey] = useState("");

  const handleGet = async () => {
    if (getKey) {
      try {
        const response = await axios.get(API_BASE_URL + `get/${getKey}`);
        setRetrievedValue(response.data.value);
      } catch (error) {
        alert("Key not found");
      }
    } else {
      alert("Please enter the key");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 transform transition hover:shadow-xl hover:scale-105">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get Key</h2>
      <input
        type="text"
        placeholder="Key"
        value={getKey}
        onChange={(e) => {
          if (!e.target.value) {
            setRetrievedValue("");
          }
          setGetKey(e.target.value);
        }}
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleGet}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-200"
      >
        Get Value
      </button>
      {retrievedValue && (
        <p className="mt-6 text-lg font-semibold text-gray-700">
          Retrieved Value:{" "}
          {getKey && <span className="text-blue-600">{retrievedValue}</span>}
        </p>
      )}
    </div>
  );
};

export default GetKeyCompoenet;
