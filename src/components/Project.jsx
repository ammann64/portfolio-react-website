
export default function Project({ project }) {
    const githubLogo = '../assets/img/github-logo.png';

    return (
        <div>
            <img src={project.image} alt={project.altText}/>
            <a href={project.deployed}><h2>{project.name}</h2></a>
            <a href={project.github}><img src={githubLogo}/></a>
        </div>
    )
}