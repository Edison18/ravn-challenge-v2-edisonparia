import React from "react";

export const DataCell = (props) => {
  return (
    <div className="data-content">
      <div className="text-data-feature">{props.info}</div>
      <div className="text-data-data">{props.value}</div>
    </div>
  );
};
