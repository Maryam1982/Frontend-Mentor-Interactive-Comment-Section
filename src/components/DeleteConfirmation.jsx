import PropTypes from "prop-types";

DeleteConfirmation.propTypes = {
  setShowDeleteConfirmation: PropTypes.func,
  updatedComment: PropTypes.object,
  updateComment: PropTypes.func,
  setActiveParentComment: PropTypes.func,
};

export default function DeleteConfirmation({
  setShowDeleteConfirmation,
  updatedComment,
  updateComment,
  setActiveParentComment,
}) {
  function onClickdelete() {
    updateComment(updatedComment);
    setShowDeleteConfirmation(false);
    setActiveParentComment(null);
  }
  function onClickCancel() {
    setShowDeleteConfirmation(false);
    setActiveParentComment(null);
  }
  return (
    <div className="delete-confirmation-container">
      <div className="confirmation-box">
        <h3 className="box-title">Delete comment</h3>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment permanently.
        </p>
        <div className="buttons-container">
          <button
            className="button btn-confirmation-delete"
            onClick={onClickdelete}
          >
            Yes, Delete
          </button>
          <button
            className="button btn-confirmation-cancel"
            onClick={onClickCancel}
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
