export default function Resume() {
    return (
        <div className="container-fluid" id="resume">
            <h2 className="row page-title title align-self-center">My Resume</h2>
            <h3><a href="/assets/doc/Austin-Mann-Resume.docx" download>Download my resume</a></h3>
            <div className="row container-fluid page-body align-items-center">
                <div className="col align-items-center">
                    <h3>Front-end Proficiencies</h3>
                    <ul className="proficiencies list-unstyled">
                        <li>ReactJS</li>
                        <li>HTML & CSS</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className="col align-items-center">
                    <h3>Back-end Proficiencies</h3>
                    <ul className="proficiencies list-unstyled">
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>NoSQL</li>
                        <li>REST API</li>
                        <li>Javascript</li>
                        <li>C++</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}