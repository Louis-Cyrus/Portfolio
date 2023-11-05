import { TextField } from "../atom/TextField";
import { Button } from "../atom/Button";

export const CommentForm = ({ onNewComment }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const commentText = event.target.comment.value;
    onNewComment(username, commentText);
    event.target.reset();
  };

  return (
    <form className="flex flex-col w-full gap-4 md:px-8" onSubmit={handleSubmit}>
      <TextField
        label="Username"
        id="username"
        type="text"
        placeholder="Username"
        required
        minLength="4"
        maxLength="20"
      />

      <TextField
        label="Commentaire"
        id="comment"
        type="text"
        placeholder="Commentaire"
        component="textarea"
        required
        minLength="10"
        maxLength="100"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
