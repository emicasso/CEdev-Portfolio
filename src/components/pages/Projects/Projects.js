import React from 'react'
import { Helmet } from 'react-helmet';
import "../../../App.css";
import Cards from './Cards';


function Projects() {
    return (
        <>
        <Helmet>
            <title>CEdev Projects</title>
            <meta name="description" content="Explore my new personal projects" />
        </Helmet>
            <Cards/>
        </>
    )
}

export default Projects
