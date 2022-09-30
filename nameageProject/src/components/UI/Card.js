import './Card.css'


function Card(props){
    const classs='card '+props.className
    return(
        <div className={classs}>
            {props.children}
        </div>


    )

}



export default Card