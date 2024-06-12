import PropTypes from "prop-types";

Rating.propTypes = {
  comment: PropTypes.object,
  updateComment: PropTypes.func,
  parentComment: PropTypes.object,
};

export default function Rating({ comment, updateComment, parentComment }) {
  function clickAdd() {
    if (!parentComment) updateComment({ ...comment, score: comment.score + 1 });
    else {
      const updatedReplies = parentComment.replies.map((item) => {
        if (item.id === comment.id)
          return { ...comment, score: comment.score + 1 };
        else return item;
      });

      updateComment({ ...parentComment, replies: updatedReplies });
    }
  }

  function clickMinus() {
    if (!parentComment) updateComment({ ...comment, score: comment.score - 1 });
    else {
      const updatedReplies = parentComment.replies.map((item) => {
        if (item.id === comment.id)
          return { ...comment, score: comment.score - 1 };
        else return item;
      });
      updateComment({ ...parentComment, replies: updatedReplies });
    }
  }
  return (
    <div className="rating-box">
      <button className="rating-button" onClick={clickAdd}>
        +
      </button>
      {comment.score}
      <button className="rating-button" onClick={clickMinus}>
        -
      </button>
    </div>
  );
}
