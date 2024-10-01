import React from "react";

const Header = () => {

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="text-2xl font-bold text-green-600">
                    RecipeMaster
                </div>

                <nav className="flex space-x-6">
                    <a href="/" className="text-gray-700 hover:text-green-600">
                        Home
                    </a>
                    <a href="/recipes" className="text-gray-700 hover:text-green-600">
                        Recipes
                    </a>
                    <a href="/about" className="text-gray-700 hover:text-green-600">
                        About
                    </a>
                    <a href="/contact" className="text-gray-700 hover:text-green-600">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
