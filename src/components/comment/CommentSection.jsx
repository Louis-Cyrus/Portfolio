import React from 'react';
import useFetch from '../../hooks/useFetch';
import { commentsUrl } from '../../lib/api-url';
import { SectionWrapper } from '../atom/SectionWrapper';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';

export const CommentSection = () => {
  const { data: comments, loading, error, refresh } = useFetch(commentsUrl);

  const handleNewComment = async (username, comment) => {
    // Valider le username et le commentaire selon les règles spécifiées
    if (username.length < 4 || username.length > 20 || comment.length < 10 || comment.length > 100) {
      // Gérer l'affichage des erreurs ici. Normalement, vous pourriez utiliser un état, 
      // mais comme spécifié pour ne pas en utiliser, vous pourriez avoir besoin de faire 
      // ces vérifications au sein du `CommentForm` et afficher l'erreur directement là-bas.
      return;
    }

    try {
      const response = await fetch(commentsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, comment }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Refresh des commentaires après ajout
      refresh();

    } catch (error) {
      // Afficher les erreurs de l'API ici si nécessaire
      console.error('Error posting new comment:', error);
    }
  };

  return (
    <SectionWrapper title="On est à l'époque de FaceBook ?">
      <div className="flex flex-col items-center w-full max-w-2xl gap-8 m-auto ">
        <div className="grid justify-center w-full gap-4 grid-cols-auto-fill-200-300">
          {loading && <p>Loading...</p>}
          {error && <p>Error loading comments: {error.message}</p>}
          {comments && comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
        <CommentForm onNewComment={handleNewComment} />
      </div>
    </SectionWrapper>
  );
};

