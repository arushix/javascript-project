import './UserList.css'
import SingleUser from './SingleUser'
import Card from '../UI/Card'


function UserList(props){

    let list=props.expens
    return(
        <Card className='users'>
        <ul>
            {
                list.map((n)=>(
                    <SingleUser 
                        key={n.id }
                        name={n.name }
                        age={n.age } />))
            }
        </ul>
        </Card>
    )
}


export default UserList