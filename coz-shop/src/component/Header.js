import './header.css'

export default function Header() {
    return (
        <header className="header-container">
            <div className="logo-container">
                <img src="logo.png" alt="logo" />
                <span className='logo-title'>COZ Shopping</span>
            </div>
            <img src="hamburger.png" alt="hamburger" />
        </header>
    )
}