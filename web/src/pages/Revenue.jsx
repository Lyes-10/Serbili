import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import SidebarRev from "../Components/SidebarRev";
import edit from "../assets/icons/edit.svg";

const Revenue = () => {
  const [formData, setFormData] = useState({
    FirstName: "FirstName",
    LastName: "LastName",
    phone: "Phone Number",
    willaya: "Willaya",
    Zone: "Alger",
  });

  const [editField, setEditField] = useState(null);

  const handleChange = (event, field) => {
    const updatedFormData = { ...formData, [field]: event.target.value };
    setFormData(updatedFormData);
    console.log(updatedFormData); // the obeject for post it
  };

  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <div>
      <Sidebar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div className="grid grid-cols-[260px,1fr] gap-6 mx-10">
        <SidebarRev active={"Account"} />
        <div className="bg-[#FBFBFE] container px-4 pt-6 mt-10 h-fit rounded-lg">
          <p className="text-[22px] font-semibold">Account Details</p>
          <div className="bg-inherit mt-2">
            {Object.keys(formData).map((field) => (
              <div key={field} className="mb-10">
                <div className="flex justify-between mt-1 border border-[#A0A5BA] rounded-xl py-2 px-2">
                  {editField === field ? (
                    field === "Zone" ? (
                      // Zone Dropdown
                      <select
                        value={formData[field]}
                        onChange={(event) => handleChange(event, field)}
                        onBlur={() => setEditField(null)}
                        className="border-none text-black px-0 py-0 font-medium text-[14px] bg-inherit focus:outline-none focus:ring-blue-500"
                      >
                        <option value="Alger">Alger</option>
                        <option value="Oran">Oran</option>
                        <option value="Constantine">Constantine</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        className="border-none text-black px-0 py-0 font-medium text-[14px] bg-inherit focus:outline-none focus:ring-blue-500"
                        value={formData[field] || ""}
                        onChange={(event) => handleChange(event, field)}
                        onBlur={() => setEditField(null)}
                      />
                    )
                  ) : (
                    <>
                      <span className="font-semibold text-[14px]">
                        {formData[field] || "Not provided"}
                      </span>
                      <button
                        className="text-[#FF6F00] text-[12px] font-semibold flex gap-1"
                        onClick={() => setEditField(field)}
                      >
                        <img src={edit} alt="" />
                        {formData[field] ? "Edit" : "Add"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
