const menus = ["About Us", "CREATE"]

const Header = () => {
return (
    <header className="fixed top-4 left-4 right-4 z-50">
        <nav className="flex justify-between items-center px-6 py-0 bg-white bg-opacity-100 backdrop-blur-md rounded-2xl border border-white border-opacity-30 shadow-lg max-w-6xl mx-auto">
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
                {
                    menus.map((menu, i) => {
                        return (
                            <a key={i} href={`#${menu}`} className="font-semibold text-2xl text-black text-center px-12 py-2 rounded-2xl transition-all ease-linear hover:bg-white hover:bg-opacity-20 hover:shadow">
                                {menu}
                            </a>
                        );
                    })
                }
            </div>
        </nav>
    </header>
)

}

export default Header;