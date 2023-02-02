import './style.sass'

export function Message(props){

  console.log(props)
  return(
    <p>{props.messageText.content}</p>
  )
}
