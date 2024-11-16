import { useState } from "react";
import Header from "./components/Header";
import SettingList from "./components/SettingList";
import SettingEdit from "./components/SettingEdit";
;

export default function EditSetting() {
  const [activeTab, setActiveTab] = useState<string>("รายการ");

  return (
    <div className="">
        <div className="p-0">
          {/* Header */}
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Content Section */}
          {activeTab === "รายการ" ? <SettingList/> : <SettingEdit />}
        </div>
    </div>
  );
}
