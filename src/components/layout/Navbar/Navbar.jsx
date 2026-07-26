function Navbar() {
    return (
        <header className="navbar">
            <div className="container">
                <h1>React App</h1>

                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;