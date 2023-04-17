import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

import portfolioStyle from '../../src/pages/styles/Portfolio.module.scss';

const options = {
    perPage: 2,
    arrows: true,
    pagination: false,
};


export default function Portfolio() {
    
    const [projects, setProjects] = useState([]);

    async function fetchRepositories() {
        try {
            console.log('Fetching repositories...');
            const response = await axios.get('https://api.github.com/users/Louis-Cyrus/repos');
            console.log('Response from GitHub API:', response);
            
            const repositories = response.data;
            console.log('Parsed repositories data:', repositories);

            //Filtre des projets selon le langage
            const languageFilter = [
                "JavaScript",
                "HTML",
                "CSS",
                "SCSS"
            ];
            const filteredProjects = repositories.filter((repository) =>
                languageFilter.includes(repository.language)
            );
            console.log('Filtered repositories data:', filteredProjects);
            
            setProjects(filteredProjects);
            console.log('Repositories set in the state', projects);
            
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    }  

    useEffect(() => {
        fetchRepositories();
    }, []);

    return (
        <>
            <Head>
                <title>My projects</title>
            </Head>
            <div className={portfolioStyle.portfolio}>
                <h2 className={portfolioStyle.portfolioTitle}>My Projects</h2>
                <div className={portfolioStyle.portfolioUnderline}></div>

                <section className={portfolioStyle.portfolioProjects}>
                    <div className="wrapper">
                        <div className="splide">
                            <Splide options={options} aria-label="My Favorite Images">
                                
                                <SplideSlide>
                                    {projects.map((project) => (
                                        <div key={project.id} className={portfolioStyle.project}>
                                            <h3 className={portfolioStyle.projectTitle}>{project.name}</h3>
                                            <p className={portfolioStyle.projectDescription}>{project.description}</p>
                                            <div className={portfolioStyle.projectLinks}>
                                                <span className={portfolioStyle.projectLink}>
                                                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                                    View GitHub
                                                    </a>
                                                </span>
                                                <span className={portfolioStyle.projectLink}>
                                                    <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                                        View Project
                                                    </a>
                                                </span>
                                            </div>
                                            <p>{project.language}</p>
                                        </div>
                                    ))}
                                </SplideSlide>
                                
                            </Splide>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}