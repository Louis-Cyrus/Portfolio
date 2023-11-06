import React, { useEffect, useReducer} from 'react';
import useFetch from '../../hooks/useFetch';
import { useIsMounted } from '../../hooks/useIsMounted';
import { Loader } from '../atom/Loader';
import { SectionWrapper } from '../atom/SectionWrapper';
import { Project } from './Project';
import { getListOfUrlRepositoriesUrl } from '../../lib/api-url';
import { GITHUB_USERNAME } from '../../lib/config';

export const ProjectSection = () => {
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
  console.log(data);

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
        {state.status === 'pending' && <Loader />}
        {state.status === 'resolved' && data.map(project => <Project key={project.id} topics={project.topics}{...project} />)}
        {state.status === 'rejected' && <div>Error: {state.error}</div>}
      </div>
    </SectionWrapper>
  );
};
