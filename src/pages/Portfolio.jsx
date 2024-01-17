import Project from "../components/Project";
import projects from "../projects";

export default function Portfolio() {
    return (
        <div className="container-fluid">
            <div className="row">
                <h1 className="col align-self-center">Portfolio</h1>
            </div>
            <div className="card-columns row justify-content-around">
                {projects.map((project) => 
                    <div className="col-md-6" key={project.id}>
                        <Project project={projects[project.id]}/>
                    </div>
                )}
            </div>
        </div>
    )
}
