import React from "react";

export const OperationLog = (props) => {
  const { operationLog } = props;

  return (
    <>
      <tr>
        <td>{operationLog.description}</td>
        <td>{operationLog.operatedAt}</td>
      </tr>
    </>
  );
};
