import Link from 'next/link';
import style from './css/style.module.css';

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <Link href="/">
                <a className={style.navbarbrand}>NoteApp 2</a>
            </Link>
            <Link href="/new">
                <a className={style.create}>Create Note</a>
            </Link>
        </nav>
    );
}

export default Navbar;