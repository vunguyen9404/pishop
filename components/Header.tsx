import Link from 'next/link';
import css from '../styles/main.scss';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle} className={css.abc}>Home Page</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header