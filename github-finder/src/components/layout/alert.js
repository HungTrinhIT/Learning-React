import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa fa-info-circle" />
        <span style={{ marginLeft: "8px" }}>{alert.msg}</span>
      </div>
    )
  );
};

export default Alert;
