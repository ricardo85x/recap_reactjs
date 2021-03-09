import React, { useState } from 'react'
import './App.css'

import background from './assets/background.jpg'

import Header from './components/Header'



function App() {

    const [ projects, setProject ] =  useState(["Desenvolvimento de App", "Front-end web"])

    function handleAddProject() {
        setProject([...projects,`Novo projeto ${Date.now()}` ])
        console.log(projects)
    }

    return (
    
    <>
        <Header title="Projects"/>

        <img src={background} width={100} />

        <ul>
            { projects.map( project => <li key={project}>{project}</li> )}
        </ul>

        <button type="button" onClick={handleAddProject} >Add project</button>
    </>
    )
}

export default App;