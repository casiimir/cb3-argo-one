import Link from 'next/link'

const NavLinks = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <Link href="/" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a>HOME</a>
                    </Link>
                    <Link href="/" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a>EXPERIENCES</a>
                    </Link>
                    <Link href="/" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a>ABOUT</a>
                    </Link>
                    <Link href="/" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a>CONTACTS</a>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}    

export default NavLinks;