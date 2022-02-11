import React from 'react';
import "./Widgets.css";
import Iframe from "react-iframe";
const Widgets = () => {
  
  return (
    <div className="widgets">
      <Iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width={"340"}
        height={"100%"}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowtransparency="true"
        frameBorder="0"
      ></Iframe>
    </div>
  );
};
// src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
export default Widgets;