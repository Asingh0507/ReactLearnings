import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav class="bg-gray-800 p-4">
                <div class="container mx-auto flex justify-between items-center">
                    <a href="#" class="text-white font-bold text-xl">MySite</a>
                    <div class="hidden md:flex space-x-4">
                        <a href="#" class="text-gray-300 hover:text-white">Home</a>
                        <a href="#" class="text-gray-300 hover:text-white">About</a>
                        <a href="#" class="text-gray-300 hover:text-white">Services</a>
                        <a href="#" class="text-gray-300 hover:text-white">Contact</a>
                    </div>
                    <div class="md:hidden">
                        <button class="text-white">☰</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar