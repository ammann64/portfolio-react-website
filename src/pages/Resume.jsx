export default function Resume() {
    return (
        <div className="container-fluid">
            <div className="row page-title">
                <h2 className="col align-self-center text">My Resume</h2>
            </div>
            <h3 id="download-link text"><a href="/assets/doc/Austin-Mann-Resume.docx" download>Download my resume</a></h3>
            <div className="text row container-fluid page-body align-items-start">
                <div className="col align-items-start">
                    <h3 className="proficiency-type">Front-end Proficiencies</h3>
                    <ul className="proficiencies list-unstyled">
                        <li>ReactJS</li>
                        <li>HTML & CSS</li>
                        <li>GraphQL</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="text col align-items-start">
                    <h3 className="proficiency-type">Back-end Proficiencies</h3>
                    <ul className="proficiencies list-unstyled">
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>NoSQL</li>
                        <li>REST API</li>
                        <li>MERN</li>
                        <li>Javascript</li>
                        <li>C++</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}