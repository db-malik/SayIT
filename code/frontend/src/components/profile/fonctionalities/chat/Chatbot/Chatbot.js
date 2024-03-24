import React, { useEffect, useState } from 'react'
import { Image, Microphone } from 'phosphor-react'
// import { useDispatch, useSelector } from 'react-redux';
// import { saveMessage } from '../_actions/message_actions';
import Message from './Sections/Message'
import { List, Icon, Avatar } from 'antd'
import Card from './Sections/Card'
import Search from 'components/profile/Search'
function Chatbot() {
  const [returnedMessages, setReturnedMessages] = useState(['Hello I am a chatbot'])
  //   useEffect(() => {

  //   }, [])

  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />)
  }

  const renderOneMessage = (message, i) => {
    if (message.content && message.content.text && message.content.text.text) {
      return <Message key={i} who={message.who} text={message.content.text.text} />
    } else if (message.content && message.content.payload.fields.card) {
      const AvatarSrc = message.who === 'bot' ? <Icon type="robot" /> : <Icon type="smile" />

      return (
        <div>
          <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
              avatar={<Avatar icon={AvatarSrc} />}
              title={message.who}
              description={renderCards(message.content.payload.fields.card.listValue.values)}
            />
          </List.Item>
        </div>
      )
    }
  }

  const renderMessage = (returnedMessages) => {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return renderOneMessage(message, i)
      })
    } else {
      return null
    }
  }

  return (
    <div>
      <div
        style={{
          margin: '10px auto',
          height: 500,
          width: '70%',
          border: '3px solid black',
          borderRadius: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        }}
      >
        <div style={{ height: 600, width: '100%', overflow: 'auto' }}>{renderMessage(returnedMessages)}</div>
      </div>
      <div className="search-styled">
        <div>
          <input autoFocus type="text" placeholder="Ingresa una instrucción aqui" />
          <Image weight="bold" size={25} />
          <Microphone weight="bold" size={25} />
        </div>
      </div>
    </div>
  )
}

export default Chatbot
