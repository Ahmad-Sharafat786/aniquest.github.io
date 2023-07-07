import React, { useState } from "react";
import ResetPassword from "./ResetPassword";
import EnterCode from "./EnterCode";
import NewPassword from "./NewPassword";

const index = () => {
  const [currentView, setCurrentView] = useState(1);
  return (
    <div>
      {currentView === 1 && <ResetPassword setCurrentView={setCurrentView} />}
      {currentView === 2 && <EnterCode setCurrentView={setCurrentView} />}
      {currentView === 3 && <NewPassword setCurrentView={setCurrentView} />}
    </div>
  );
};

export default index;
