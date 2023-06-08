import React from "react";

const ButtonForm = (props) => {
  return (
    <div className="card-actions mt-4 justify-between">
      <button type="submit" className="btn btn-success" disabled={props.onEdit}>
        완료
      </button>
      <button
        type="button"
        className="btn btn-error"
        onClick={props.onCancel}
        disabled={props.onEdit}
      >
        취소
      </button>
    </div>
  );
};

export default ButtonForm;
