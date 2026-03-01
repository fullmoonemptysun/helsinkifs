const Filter = ({currSearch, searchChange}) => {


    return (
                <div>
                    Filter by Name:{" "}
                    <input value={currSearch} onChange={searchChange} />
                </div>
    )
}


export default Filter
