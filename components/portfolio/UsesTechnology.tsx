import React from "react";

const UsesTechnology = () => {
  return (
    <div>
      <h2 className="text-2xl text-white my-5">Uses Technology</h2>
      <div className="flex gap-5 flex-wrap">
        <span className="btn btn-info rounded-none cursor-default">HTML5</span>
        <span className="btn btn-primary rounded-none cursor-default">
          CSS3
        </span>
        <span className="btn btn-warning rounded-none cursor-default">
          JavaScript
        </span>
        <span className="btn btn-secondary rounded-none cursor-default">
          ReactJs
        </span>
        <span className="btn btn-success rounded-none cursor-default">
          NodeJs
        </span>
        <span className="btn btn-accent rounded-none cursor-default">
          Express Js
        </span>
        <span className="btn btn-error rounded-none cursor-default">
          MongoDB
        </span>
      </div>
    </div>
  );
};

export default UsesTechnology;
