import './Search.scss'

export const Search = () => {
    const submitHandler = (event) => {
        event.preventDefault()
    }
    return (
        <div className='search'>
            <form onSubmit={submitHandler}>
                <button className='button'></button>
            </form>
        </div>
    )
}
