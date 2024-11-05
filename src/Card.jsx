import React from 'react'

const Card = () => {
    return (<>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
            <img class="w-full" src="https://via.placeholder.com/150" alt="Sample Image"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-gray-800">Card Title</div>
                    <p class="text-gray-700 text-base">
                        This is a simple card component using Tailwind CSS. You can easily style it with utility classes.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
                </div>
        </div>
    </>
    )
}

export default Card