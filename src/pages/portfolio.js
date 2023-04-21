import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import portfolioStyle from '../../src/pages/styles/Portfolio.module.scss';
import projectImages from './api/projectImages.json';

export default function Portfolio() {
    const [projects, setProjects] = useState([]);

    async function fetchRepositories() {
        try {
            console.log('Fetching repositories...');
            const response = await axios.get('https://api.github.com/users/Louis-Cyrus/repos');
            console.log('Response from GitHub API:', response);

            const repositories = response.data;
            console.log('Parsed repositories data:', repositories);

            // Filter projects based on language
            const languageFilter = ["JavaScript", "HTML", "CSS", "SCSS"];
            const filteredProjects = repositories.filter((repository) =>
                languageFilter.includes(repository.language)
            );
            console.log('Filtered repositories data:', filteredProjects);

            // Add image URLs to the filtered projects
            filteredProjects.forEach((project) => {
                project.imageUrl = projectImages[project.name] || "";
            });
            console.log('Filtered projects with image URLs:', filteredProjects);

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
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={50}
                >
                    {projects.map((project) => (
                        <div key={project.id} className={portfolioStyle.card}>

                            <section className={portfolioStyle.cardImage}>
                                <img src={project.imageUrl} alt={project.name} />
                            </section>

                            <section className={portfolioStyle.cardInfo}>
                                <h3 className={portfolioStyle.projectTitle}>{project.name}</h3>
                                <p className={portfolioStyle.projectDescription}>{project.description}</p>
                                
                                <div className={portfolioStyle.projectLinks}>
                                    <span className={portfolioStyle.projectLink}>
                                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className={portfolioStyle.noUnderline}>
                                            View GitHub
                                        </a>
                                    </span>
                                    <span className={portfolioStyle.projectLink}>
                                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" className={portfolioStyle.noUnderline}>
                                            View Project
                                        </a>
                                    </span>
                                </div>
                            </section>
                            
                        </div>
                    ))}
                </Carousel>
                </section>
            </div>
        </>
    )
}