const Friend  = ({ name, hobbies, title='Super Friend'}) => {
    return (
        <div>
            <p>{title}</p>
            <p>Name: {name}</p>
            <p>Hobbies:</p>
            <ul>
                { hobbies.map((hobby, i) => <li key={i}>{hobby}</li> )}
            </ul>
        </div>
    )
}

export default Friend