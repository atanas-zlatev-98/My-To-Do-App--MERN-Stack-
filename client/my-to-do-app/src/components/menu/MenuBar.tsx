import { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import './MenuBar.style.scss';
import MenuContent from "./MenuContent";

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState("w-15");

  const toggleMenu = () => {
    if (activeMenu === "w-15") {
      setActiveMenu("w-80");
    } else {
      setActiveMenu("w-15");
    }
  };

  return (
    <div className={`${activeMenu} h-screen bg-gray-light flex flex-col ${activeMenu === 'w-15' ? 'items-center': ''}`}>
      <div className={`flex flex-row justify-between p-2 ${activeMenu === 'w-80' ? 'ps-4 pe-4' : ''}items-center`}>
        <p className={`text-xl font-bold ${activeMenu === 'w-15' ? 'hidden': ''}`}>Menu</p>
        <Button onClick={() => toggleMenu()}>
          <Menu />
        </Button>
      </div>
      {activeMenu === "w-80" ? <MenuContent/> : <div></div>}
    </div>
  );
};

export default MenuBar;
