


function SingleUser(props){
    const info=props.name + ' ('+props.age+' years old )'
    return(
        <li>
                {info}
        </li>
    )
}

export default SingleUser