import './header.css'

export default function Header() {
    return (
        <header className="header-container">
            <div className="logo-container">
                <img src="/image_component/logo.png" alt="logo" />
                <span className='logo-title'>COZ Shopping</span>
            </div>
            <img src="/image_component/hamburger.png" alt="hamburger" />
        </header>
    )
}