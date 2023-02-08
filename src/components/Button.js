export const Button= ({handleSubmit})=> {
    return (<button type='submit' onClick={handleSubmit} className='flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded'>Search</button>);
}