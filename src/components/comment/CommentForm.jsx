// On va devoir faire une fetch en utilisant post avec l'url commentsUrl.
// Avant de faire le post, le username doit faire entre 4 et 20 caractères et le commentaire entre 10 et 100.
// Je précise le body qu'il faut avoir dans le fichier api-url.js.
// Attention, l'api renvoie des erreurs sous cette forme : {error: "message"}.
// Il faut afficher cette erreur dans le formulaire. De plus il ne faut pas utiliser de state
// Quand tu ajoutes un commentaire, il faut refresh la page des commentaires.

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

  // Commentaire - Exercise
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
