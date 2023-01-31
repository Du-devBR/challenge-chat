import './style.sass'

export function Contact(props){

  const lastMessageContact = props.data.message[props.data.message.length - 1]
  return(
    <div className='container-contact' onClick={() => props.onSelectContact(props.data)}>
      <div className="contact">
        <img className='avatar-contact' src={props.data.picture} alt="" />
        <div className="info-contact">
          <div className="content-contact">
            <span className="name-contact">{props.data.nome}</span>
            <span className='last-message'>{lastMessageContact.content}</span>
          </div>
          <span className='hour-last-message'>{lastMessageContact.hour}</span>
        </div>
      </div>
    </div>
  )
}
