function Heading(props) {
    console.log(props);
    //I want to add a color
    const headingStyle = {
        color: props.color ? props.color : "green",
        fontSize: props.fontSize + "px"
    }
    return(
        <div>
            <h1 style={headingStyle}>Hello I am {props.name} and I am {props.age} years old</h1>
        </div>
    )
}

export default Heading