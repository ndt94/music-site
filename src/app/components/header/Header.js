import React from 'react';

const Header = () => {
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a className='navbar-item' href='https://bulma.io'>
                    <img
                        src='https://bulma.io/images/bulma-logo.png'
                        width='112'
                        height='28'
                        alt='Logo'
                    />
                </a>

                <a
                    role='button'
                    className='navbar-burger burger'
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                    href='https://bulma.io'
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>

            <div id='navbarBasicExample' className='navbar-menu'>
                <div className='navbar-start'>
                    <a href='https://bulma.io' className='navbar-item'>
                        Home
                    </a>

                    <a href='https://bulma.io' className='navbar-item'>
                        Documentation
                    </a>
                </div>

                <div className='navbar-end'>
                    <div className='buttons'>
                        <button className='button is-primary'>
                            <strong>Sign up</strong>
                        </button>
                        <button className='button is-light'>Log in</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
