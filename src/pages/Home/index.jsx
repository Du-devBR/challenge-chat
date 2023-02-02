import './style.sass'
import { UsersThree, CircleDashed, DotsThreeOutlineVertical, ChatText } from "phosphor-react";
import { Contact } from '../../components/Contact';
import { useState } from 'react';
import { infoContact } from '../../assets/db/infoContact'
import { useEffect } from 'react';
import { useParams} from 'react-router-dom'
import { Message } from '../../components/Message';

export function HomePage(){

  const [contact, setContacts] = useState([])
  const [ selectContact, setSelectContact] = useState([])
  const [message, setMessage] = useState()
  const { id } = useParams()

  useEffect(() => {
    setContacts(infoContact)
  })

  useEffect(() => {
    setMessage(selectContact.message)
  }, [selectContact])

  return(
    <div className="container">
      <div className="container-chat">
        <header className='container-header'>
          <img className='avatar-user' src="https://pps.whatsapp.net/v/t61.24694-24/162799914_1202057790275062_4530743054610180036_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSecA8G0Yd3Gzkwo8gvpdCi1NsUTkRSb7XNNZmT__3JLA&oe=63E53C00" alt="" />
          <ul className='nav-list'>
            <li><UsersThree size={20} color="#E1E1E6" weight="fill" /></li>
            <li><CircleDashed size={20} color="#E1E1E6" weight="fill" /></li>
            <li><ChatText size={20} color="#E1E1E6" weight="fill" /></li>
            <li><DotsThreeOutlineVertical size={20} color="#E1E1E6" weight="fill" /></li>
          </ul>
        </header>
        <div className="list-chat">
          <ul>
            {
              contact.map((contacts) => (
                <Contact
                  key={contacts.id}
                  id={contacts.id}
                  data={contacts}
                  onSelectContact = {currentContact => setSelectContact(currentContact)}
                />
              ))
            }
          </ul>
        </div>
      </div>
      <div className="container-chat-conversation">
        <div className="header-conversation">
          <div className="contact-conversation">
            <img className='avatar-contact' src={selectContact.picture} alt="" />
            <div className='info-contact'>
              <span className='name-contact'>{selectContact.nome}</span>
              <div className="status">
                <span className='dot'></span>
                <span className='status-online'>Online</span>
              </div>
            </div>
          </div>
          <button
            className='close-conversation'>
          </button>
        </div>
        <div className="container-message">
          <ul>
            {
              message !== undefined &&
              <li className='message-text'>
                {
                  message.map(message =>(
                    <div className='message'>
                      <span>{selectContact.nome} - {message.hour}</span>
                      <Message
                        messageText={message}
                      />
                    </div>
                  ))
                }
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
