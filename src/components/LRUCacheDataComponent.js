import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { API_BASE_URL, WEB_SOCKET_API_BASE_URL } from "../Contant";

const LRUCacheDataComponent = () => {
  const [cacheData, setCacheData] = useState({});

  useEffect(() => {
    const ws = new WebSocket(WEB_SOCKET_API_BASE_URL + "webSocket");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setCacheData(data);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleDelete = async (deleteKey) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}delete/${deleteKey}`);
      if (response.status === 200) {
      } else {
        throw new Error("Failed to delete key");
      }
    } catch (error) {
      alert("Failed to delete key: " + error.message);
    }
  };
  return (
    <div className="flex-1 bg-white shadow-lg rounded-lg p-8 transform transition hover:shadow-xl hover:scale-105 mt-4 mb-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        LRU Cache Data
      </h1>
      <ul className="space-y-4">
        {Object.entries(cacheData).map(([key, value]) => (
          <li
            key={key}
            className="bg-gray-100 p-4 rounded-lg border border-gray-300 flex items-center justify-between shadow-sm"
          >
            <div>
              <span className="font-semibold text-gray-800">{key}:</span>{" "}
              <span className="text-blue-600">{value.value}</span> (Expires in:{" "}
              <span className="text-red-600">{value.expiration} s</span>)
            </div>
            <button
              onClick={() => handleDelete(key)}
              className="text-red-500 hover:text-red-700 transition duration-200"
            >
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LRUCacheDataComponent;
