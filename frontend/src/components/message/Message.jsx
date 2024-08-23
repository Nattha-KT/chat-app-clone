import React from "react";

const Message = () => {
  return (
    <div className=" chat chat-end">
      <div className=" chat-image avatar">
        <div className=" w-10 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt=" Bubble component"
          />
        </div>
      </div>
      <div className="chat-bubble">I loved you.</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default Message;
