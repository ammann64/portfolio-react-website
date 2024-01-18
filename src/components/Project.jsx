
export default function Project({ project }) {
    const githubLogo = '../assets/img/github-logo.png';

    return (
        <>
            <img src={project.image} alt={project.altText} className="card-img-top img-fluid"/>
            <div className="card-body text-primary">
                <a href={project.deployed}><h2 className="card-title">{project.name}</h2></a>
                <a href={project.github}><img src={githubLogo}/></a>
            </div>
        </>
    )
}