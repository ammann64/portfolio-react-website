import Project from "../components/Project";
import projects from "../projects";

export default function Portfolio() {
    return (
        <div className="container-fluid" id="portfolio">
            <div className="row page-title">
                <h2 className="col align-self-center mb-4">Portfolio</h2>
            </div>
            <div className="card-columns row justify-content-around page-body">
                {projects.map((project) => 
                    <div className="card col-4 container-fluid text-center" key={project.id}>
                        <Project project={projects[project.id]}/>
                    </div>
                )}
            </div>
        </div>
    )
}
