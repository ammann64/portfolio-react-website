import Nav from './NavTabs';

export default function Header() {
    return (
        <header className="container-fluid mb-4 justify-center">
            <div className="row">
                <h1 className="col-md-6 title text">Austin Mann</h1>
                <Nav />
            </div>
        </header>
    );
}