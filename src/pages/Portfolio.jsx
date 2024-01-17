import Project from "../components/Project";
import projects from "../projects";

export default function Portfolio() {
    return (
        <div className="container-fluid">
            <div className="row">
                <h1 className="col align-self-center mb-4">Portfolio</h1>
            </div>
            <div className="card-columns row justify-content-around">
                {projects.map((project) => 
                    <Project project={projects[project.id]}/>
                )}
            </div>
        </div>
    )
}
