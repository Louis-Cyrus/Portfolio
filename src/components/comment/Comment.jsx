// Afficher les commentaires en utilisant le composant Comment
// Mais il faut aussi afficher un loader pendant le chargement des commentaires
// Et un message d'erreur si le chargement des commentaires échoue

import { Typography } from '../atom/Typography';

export const Comment = ({ username, comment, createdAt }) => {
  const createdAtDate = new Date(createdAt);

  const formattedDate = `${createdAtDate.getHours()}:${createdAtDate.getMinutes()} - ${createdAtDate.getDate()}/${createdAtDate.getMonth()}/${createdAtDate.getFullYear()}`;

  return (
    <fieldset className="flex flex-col justify-between p-4 pt-2 border-opacity-25 rounded-md bg-paper">
      <legend className="text-sm text-primary">{username}</legend>
      <Typography variant="body2" className="break-all">
        {comment}
      </Typography>
      <Typography variant="body2" color="secondary" className="self-end text-xs">
        {formattedDate}
      </Typography>
    </fieldset>
  );
};
