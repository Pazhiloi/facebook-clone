import { Avatar } from '@mui/material';
import React from 'react';
import './Story.css'
const Story = ({image, profilePic, title}) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profilePic} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;