const Header = ({ onGetStarted, showOnlyHome = false }) => {
    const handleMenuClick = (menu) => {
        if (menu === "CREATE" && onGetStarted) {
            onGetStarted(); // Call the same function as the main CREATE button
        } else if (menu === "About Us") {
            // Smooth scroll to About section
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else if (menu === "HOME" && onGetStarted) {
            onGetStarted(); // Go back to home
        }
    };

    return (
        <header className="fixed top-4 left-4 right-4 z-50">
            <nav className="flex justify-between items-center px-6 py-0 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl border border-white border-opacity-30 shadow-lg max-w-6xl mx-auto">
                {/* Logo */}
                <div className="flex items-center">
                    <img 
                        src="/img.png" 
                        alt="Create Logo" 
                        className="h-20 w-auto"
                    />
                </div>
                
                {/* Menu Items */}
                <div className="flex items-center space-x-4">
                    {showOnlyHome ? (
                        <button 
                            onClick={() => handleMenuClick("HOME")}
                            className="font-semibold text-2xl text-black text-center px-12 py-2 rounded-2xl transition-all ease-linear hover:bg-black hover:text-white hover:shadow cursor-pointer"
                        >
                            HOME
                        </button>
                    ) : (
                        <>
                            <button 
                                onClick={() => handleMenuClick("About Us")}
                                className="font-semibold text-2xl text-black text-center px-12 py-2 rounded-2xl transition-all ease-linear hover:bg-black hover:text-white hover:shadow cursor-pointer"
                            >
                                About
                            </button>
                            <button 
                                onClick={() => handleMenuClick("CREATE")}
                                className="font-semibold text-2xl text-black text-center px-12 py-2 rounded-2xl transition-all ease-linear hover:bg-black hover:text-white hover:shadow cursor-pointer"
                            >
                                CREATE
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )

}

export default Header;