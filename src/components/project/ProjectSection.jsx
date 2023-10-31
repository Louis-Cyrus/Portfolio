// On va récupérer tous les Github Repository qui ont été mis en Pinned et les afficher
// On aura besoin de gérer un state pour fetch les données
// On a envie d'afficher un Loader le temps que ça charge, on trouva ça dans le dossier 'src/components/atom/Loader.jsx'
// On a envie d'afficher un message d'erreur si jamais on a un problème
// On doit utiliser qu'un seul state pour gérer les données et le state.
// On utilisera useReducer (qui a ces états: idle, pending, rejected, resolved), pour gérer les données et le state.
// On va créer un hook custom qui permet de fetch les données. On le trouvera dans le dossier 'src/hooks/useFetch.js'
// Il va falloir un hook pour voir si le composant est unmount, et dans ce cas, ne pas set le state.

import React, { useEffect, useReducer} from 'react';
import useFetch from '../../hooks/useFetch';
import { useIsMounted } from '../../hooks/useIsMounted';
import { Loader } from '../atom/Loader';
import { SectionWrapper } from '../atom/SectionWrapper';
import { Project } from './Project';
import { getListOfUrlRepositoriesUrl } from '../../lib/api-url';
import { GITHUB_USERNAME } from '../../lib/config';

export const ProjectSection = () => {
  // GitHub Repository - Exercise
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'FETCHING':
          return { ...state, status: 'pending' };
        case 'FETCHED':
          return { ...state, status: 'resolved', data: action.payload };
        case 'FETCH_ERROR':
          return { ...state, status: 'rejected', error: action.payload };
        default:
          return state;
      }
    },
    { status: 'idle', data: null, error: null }
  );

  const isMounted = useIsMounted();
  const { data, error } = useFetch(getListOfUrlRepositoriesUrl({ username: GITHUB_USERNAME}));

  useEffect(() => {
    if(data){
      if(isMounted.current){
        dispatch({ type: 'FETCHED', payload: data });
      }
    }

    if(error){
      if(isMounted.current){
        dispatch({ type: 'FETCH_ERROR', payload: error });
      }
    }
  }
  , [data, error, isMounted]);

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap justify-center gap-8">
        {/* GitHub Repository - Exercise (replace this) */}
        {state.status === 'pending' && <Loader />}
        {state.status === 'resolved' && data.map(project => <Project key={project.id} {...project} />)}
        {state.status === 'rejected' && <div>Error: {state.error}</div>}
      </div>
    </SectionWrapper>
  );
};
