import { useState } from 'react';
import { validateEmail } from '../utils/helper';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleElementBlur = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (!inputValue) {
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail) {
            setErrorMessage('Email is invalid.');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='container-fluid'>
            <div className="row page-title">
                <h2 className="col align-self-center text">Contact Me</h2>
            </div>
            <form className='row form' onSubmit={handleSubmit}>
                <input
                  value={name}
                  name='name'
                  onChange={handleInputChange}
                  onBlur={handleElementBlur}
                  type='text'
                  placeholder='name'
                />
                <input
                  value={email}
                  name='email'
                  onChange={handleInputChange}
                  onBlur={handleElementBlur}
                  type='email'
                  placeholder='email'
                />
                <input
                  value={message}
                  name='message'
                  onChange={handleInputChange}
                  onBlur={handleElementBlur}
                  type='text'
                  placeholder='message'
                />
                <button type='submit'>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;