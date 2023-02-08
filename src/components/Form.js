import { Button } from "./Button";

export const Form = ({ query, setQuery, handleSubmit }) => {
    return (
        <>
            <form className="w-full max-w-sm">
                <div className="flex items-center border-b-2 border-gray-500 py-2">
                    <input type='text' placeholder='Search Image...' value={query} onChange={e => setQuery(e.target.value)} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' />
                    <Button handleSubmit={handleSubmit}></Button>
                </div>
            </form>
        </>
    );
}
