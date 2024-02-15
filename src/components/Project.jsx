
export default function Project({ project }) {
    const githubLogo = '../assets/img/github-logo.png';

    return (
        <>
            <img src={project.image} alt={project.altText} className="card-img-top align-self-center img-fluid row"/>
            <div className="card-body text-primary row">
                <a href={project.deployed}><h3 className="card-title mb-2">{project.name}</h3></a>
                <a href={project.github}><img className="img-fluid" src={githubLogo}/></a>
            </div>
        </>
    )
}