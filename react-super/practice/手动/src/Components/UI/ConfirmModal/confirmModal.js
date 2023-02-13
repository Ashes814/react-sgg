import React from "react";
import "./confirmModal.css";
import Card from "../Card/Card";
import BackDrop from "../BackDrop/BackDrop";

const ConfirmModal = (props) => {
  return (
    <BackDrop>
      <Card className="confirmModal">
        <div className="confirmText">
          <p>{props.confirmText}</p>
        </div>
        <div className="confirmButton">
          <button className="confirm" onClick={props.onConfirm}>
            Confirm
          </button>
          <button className="cancel" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </Card>
    </BackDrop>
  );
};

export default ConfirmModal;
