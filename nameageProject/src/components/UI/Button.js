import './Button.css'

function Button(props){
    return(
            <button onClick ={props.onClick} type={props.type || 'button'} className='button'>
                {props.children}
            </button>
    )

}

export default Button