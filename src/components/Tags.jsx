import React from 'react';
import './Tags.scss'; 

export default function Tags({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}