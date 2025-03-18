import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="text-4xl text-textColor1 h-screen w-full flex flex-col justify-center items-center py-10">
      <div className="flex flex-col gap-20"> 
        <div className="flex gap-20 flex-wrap justify-center items-center">
          <div className="flex flex-col gap-8 items-center">
            <div
              className="flex flex-col items-center justify-center rounded-[15px] border-[4px] border-[#F7941D] bg-[#0B1215] w-64 h-52 gap-2.5 p-3"
              style={{
                borderColor: "var(--Border-Gradient, #F7941D)",
                backgroundColor: "var(--Background-Color, #0B1215)",
              }}
            >
              <img
                src="../Images/add-user-icon-facebook-icon-fb-icon-png-favpng-fnBdP2vpBkVyZi0L0khfTm15D.jpg"
                alt="Add Member"
                className="w-full h-full object-contain"
              />
            </div>
            <Link to="/addmember">
              <button
                className="pt-4 pb-[14px] px-[18px] rounded-[10px] border-[3px] border-[#F7941D] bg-[#0B1215] hover:bg-[#F7941D] text-white font-verna text-lg"
                style={{
                  borderColor: "var(--Border-Gradient, #F7941D)",
                  backgroundColor: "var(--Background-Color, #0B1215)",
                }}
              >
                Add Member
              </button>
            </Link>
          </div>

          <div className="flex flex-col gap-8 items-center">
            <div
              className="flex flex-col items-center justify-center rounded-[15px] border-[4px] border-[#F7941D] bg-[#0B1215] w-64 h-52 gap-2.5 p-3"
              style={{
                borderColor: "var(--Border-Gradient, #F7941D)",
                backgroundColor: "var(--Background-Color, #0B1215)",
              }}
            >
              <img
                src="../Images/istockphoto-1151601555-612x612.jpg"
                alt="Add Event"
                className="w-full h-full object-contain"
              />
            </div>
            <Link to="/addevent">
              <button
                className="pt-4 pb-[14px] px-[14px] rounded-[10px] border-[3px] border-[#F7941D] bg-[#0B1215] hover:bg-[#F7941D] text-white font-verna text-lg"
                style={{
                  borderColor: "var(--Border-Gradient, #F7941D)",
                  backgroundColor: "var(--Background-Color, #0B1215)",
                }}
              >
                Add Event
              </button>
            </Link>
          </div>
        </div>

        <div className="flex gap-20 flex-wrap justify-center items-center">
          <div className="flex flex-col gap-8 items-center">
            <div
              className="flex flex-col items-center justify-center rounded-[15px] border-[4px] border-[#F7941D] bg-[#0B1215] w-64 h-52 gap-2.5 p-3"
              style={{
                borderColor: "var(--Border-Gradient, #F7941D)",
                backgroundColor: "var(--Background-Color, #0B1215)",
              }}
            >
              <img
                src="../Images/view-members-icon.jpg"
                alt="Add Photos"
                className="w-full h-full object-contain"
              />
            </div>
            <Link to="/members">
              <button
                className="pt-4 pb-[14px] px-[18px] rounded-[10px] border-[3px] border-[#F7941D] bg-[#0B1215] hover:bg-[#F7941D] text-white font-verna text-lg"
                style={{
                  borderColor: "var(--Border-Gradient, #F7941D)",
                  backgroundColor: "var(--Background-Color, #0B1215)",
                }}
              >
                Add Photos
              </button>
            </Link>
          </div>

          <div className="flex flex-col gap-8 items-center">
            <div
              className="flex flex-col items-center justify-center rounded-[15px] border-[4px] border-[#F7941D] bg-[#0B1215] w-64 h-52 gap-2.5 p-3"
              style={{
                borderColor: "var(--Border-Gradient, #F7941D)",
                backgroundColor: "var(--Background-Color, #0B1215)",
              }}
            >
              <img
                src="../Images/view-events-icon.jpg"
                alt="Add Projects"
                className="w-full h-full object-contain"
              />
            </div>
            <Link to="/events">
              <button
                className="pt-4 pb-[14px] px-[14px] rounded-[10px] border-[3px] border-[#F7941D] bg-[#0B1215] hover:bg-[#F7941D] text-white font-verna text-lg"
                style={{
                  borderColor: "var(--Border-Gradient, #F7941D)",
                  backgroundColor: "var(--Background-Color, #0B1215)",
                }}
              >
                Add Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;