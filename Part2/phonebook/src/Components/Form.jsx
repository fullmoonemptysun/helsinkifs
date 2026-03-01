

const Form = ({handleFormSubmit, handleInputChange, newName, handlePhoneChange, newNum}) => {

    return (
         <form onSubmit={handleFormSubmit}>
                    <div>
                        name:{" "}
                        <input onChange={handleInputChange} value={newName} />
                    </div>
                    <div>
                        phone:{" "}
                        <input
                            type="tel"
                            onChange={handlePhoneChange}
                            value={newNum}
                        />
                    </div>
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
    )
}


export default Form
