import axios from "axios";
import React, { useState } from "react";
import { API_BASE_URL } from "../Contant";

const AddKey = () => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [expiry, setExpiry] = useState();

  const handleSet = async () => {
    if (key && value && expiry > 0) {
      try {
        await axios.post(API_BASE_URL + "set", {
          key: key,
          value: value,
          expiry: expiry,
        });
        setKey("");
        setValue("");
        setExpiry("");
      } catch (error) {
        alert("Server error" + error);
      }
    } else if (expiry < 0) {
      alert("Expiry value should be greater than zero");
    } else alert("Key, Value or Expiry can't be empty");
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-5 transform transition hover:shadow-xl hover:scale-105">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Set Key</h2>
      <input
        type="text"
        placeholder="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Expiry (seconds)"
        value={expiry}
        onChange={(e) => {
          if (e.target.value) {
            setExpiry(Number(e.target.value));
          } else setExpiry(undefined);
        }}
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSet}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-200"
      >
        Set Key
      </button>
    </div>
  );
};

export default AddKey;
