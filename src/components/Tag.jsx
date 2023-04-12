import React from "react";

function Tag({hasTag}) {
  return (
    <div className="tag">
      <p className="tag__text">{hasTag}</p>
    </div>
  );
};

export default Tag;