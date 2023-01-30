import './style.sass'
import { UsersThree, CircleDashed, DotsThreeOutlineVertical, ChatText } from "phosphor-react";
export function HomePage(){

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
      </div>
      <div className="container-chat-conversation">
        <div className="header-conversation">
          <div className="contact-conversation">
            <img className='avatar-contact' src="https://pps.whatsapp.net/v/t61.24694-24/321189497_188822440395119_3042720346348937263_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQK3W03sL12Up0Bs_McuS9GzYX0PhnOAg83VPRGs3jGLg&oe=63E54832" alt="" />
            <div className='info-contact'>
              <span className='name-contact'>Camila</span>
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
      </div>
    </div>
  )
}
