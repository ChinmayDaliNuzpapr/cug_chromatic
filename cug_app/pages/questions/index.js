import React from "react";
import Sidebar from "../../components/Workflow/Sidebar";
const index = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Col-1: List of Categories */}
      <div>
        <Sidebar />
      </div>
      {/* Col-2: List of Questions */}
      <div>
        <h1>Adding a HEro Section here</h1>
        <h2>List of questions below</h2>
      </div>
      {/* Col-3: */}
    </div>
  );
};

export default index;
