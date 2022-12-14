import React from "react";

export default function alert(props) {
  return (
    <div style={{height:"0.5rem"}}>
         { props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type}</strong> {props.alert.message}
      </div>
    )}
    </div>
  );
}
