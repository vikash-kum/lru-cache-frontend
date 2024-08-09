import React from "react";
import AddKey from "./components/AddKey";
import GetKeyCompoenet from "./components/GetKeyCompoenet";
import LRUCacheDataComponent from "./components/LRUCacheDataComponent";

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 mt-2">
        LRU Cache Client
      </h1>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-12">
        <div className="flex-1">
          <AddKey />
          <GetKeyCompoenet />
        </div>

        <LRUCacheDataComponent />
      </div>
    </div>
  );
}

export default App;
