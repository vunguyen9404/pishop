import Link from 'next/link';
import React from 'react';
import css from '../styles/main.scss';

const linkStyle = {
  marginRight: 15
};

class Header extends React.Component {
    render() {
        return (
            <div>
                <Link href="/">
                    <a style={linkStyle} className={css.abc}>Home Page</a>
                </Link>
                <p>Hello World</p>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
            </div>
        )
    }
}

export default Header;