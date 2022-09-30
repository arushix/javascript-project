import './ErrorModel.css'
import ReactDOM  from 'react-dom'
import Card from './Card'
import Button from './Button'

function Backdrop(props){
    return(
        <div className="backdrop" onClick={props.close}>

        </div>
    )
}

function ModalOverlay(props){
    return(
        <Card className="modal">

            <header className='header'>
                <h2>
                    {props.title}
                </h2>
            </header>

            <div className='content'>
                <p>
                    {props.message}
                </p>
            </div>

            <footer className='actions'>
                <Button onClick={props.close}>kk...</Button>
            </footer>

        </Card>
        
    )
}

function ErrorModel(props){
    return(
    <> 
        {ReactDOM.createPortal(<Backdrop close={props.close}/>,document.getElementById('backdrop-root'))}
        
        {ReactDOM.createPortal(<ModalOverlay close={props.close}
                                             title={props.title}
                                             message={props.message}
                                             />,document.getElementById('backdrop-root'))}
    </>   

    )
}
export default ErrorModel