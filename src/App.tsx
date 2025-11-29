import React from 'react';
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
