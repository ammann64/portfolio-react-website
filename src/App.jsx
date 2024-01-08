import "./App.css";
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import "./App.css";

const projects = [
    {
        github: 'https://github.com/ammann64/javascript-coding-quiz',
        name: 'Javascript Coding Quiz',
        image: './assets/img/project-images/javascript-quiz',
        altText: 'A screenshot of the starting screen of the quiz. There is a high score button in the top right, a description of the quiz, then a start quiz button at the bottom',
        deployed: 'https://ammann64.github.io/javascript-coding-quiz/',
    },
    {
        github: 'https://github.com/ammann64/password-generator',
        name: 'Password Generator',
        image: './assets/img/project-images/password-generator',
        altText: 'A password generator with some example output shown, and with a generate button below',
        deployed: 'https://github.com/ammann64/password-generator',
    },
    {
        github: 'https://github.com/ammann64/note-taking-app',
        name: 'Note Taking App',
        image: './assets/img/project-images/note-taker',
        altText: 'A note taking app with some example notes with delete buttons beside',
        deployed: 'https://protected-waters-52777-a17f0115b214.herokuapp.com/',
    },
    {
        github: 'https://github.com/ammann64/austin-work-scheduler',
        name: 'Work Scheduler',
        image: './assets/img/project-images/work-scheduler',
        altText: 'An empty work scheduler with hour dividers for each hour of the work day',
        deployed: 'https://ammann64.github.io/austin-work-scheduler/'
    }
]

function App() {
    return (
        <>
            <Header />
            <main className='mx-3'>
                <Outlet />
            </main>
        </>
    );
}

export default App;