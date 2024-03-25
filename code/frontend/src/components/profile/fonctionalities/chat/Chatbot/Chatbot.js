import React, { useEffect, useState } from 'react'
import { Image, Microphone } from 'phosphor-react'
// import { useDispatch, useSelector } from 'react-redux';
// import { saveMessage } from '../_actions/message_actions';
import Message from './Sections/Message'
import {  Icon, Avatar } from 'antd'
import Card from './Sections/Card'
function Chatbot() {
  const [inputValue, setInputValue] = useState('') // State to store input value

  // eslint-disable-next-line no-unused-vars
  const [returnedMessages, setReturnedMessages] = useState(['Hello I am a chatbot'])
  useEffect(() => {
    console.log(returnedMessages)
  }, [returnedMessages])

  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />)
  }

  const renderOneMessage = (message, i) => {
    if (message.content && message.content.text && message.content.text.text) {
      console.log("eeeeeeeeeee");
      return <Message key={i} who={message.who} text={message.content.text.text} />
    } else if (message.content && message.content.payload.fields.card) {
      const AvatarSrc = message.who === 'bot' ? <Icon type="robot" /> : <Icon type="smile" />
      console.log('hiiiiii');
      return (
        <div key={i}>
          <div style={{ display: 'flex', alignItems: 'left' }}>
            <span style={{ color: message.who === 'bot' ? 'blue' : 'red', marginRight: '0.5rem' }}>{<Avatar icon={AvatarSrc} />}    {message.who}</span>
            <br /> {/* Return to next line */}
          </div>
          <div style={{ marginTop: '0.5rem' }}>{renderCards(message.content.payload.fields.card.listValue.values)}</div>
        </div>
      )
    }
  }

  // const renderMessage = (returnedMessages) => {
  //   if (returnedMessages) {
  //     return returnedMessages.map((message, i) => {
  //       return renderOneMessage(message, i)
  //     })
  //   } else {
  //     return null
  //   }
  // }

  const handleChange = (event) => {
    // Update input value when it changes
    setInputValue(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setReturnedMessages([...returnedMessages, { content: { text: { text: inputValue } }, who: 'user' }])
      setInputValue('')
    }
  }

  const handleImageClick = () => {
    // Logic to handle image click
    console.log('Image clicked')
  }

  const handleMicrophoneClick = () => {
    // Logic to handle microphone click
    console.log('Microphone clicked')
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
        <div style={{ height: 600, width: '100%', overflow: 'auto' }}>{returnedMessages.map((message, i) => renderOneMessage(message, i))}</div>{' '}
      </div>
      <div className="search-styled">
        <div>
          <input
            autoFocus
            type="text"
            placeholder="write a message"
            value={inputValue}
            onChange={handleChange} // Add onChange event handler to update input value
            onKeyDown={handleKeyPress} // Add onKeyPress event handler to handle Enter key press
          />{' '}
          <Image weight="bold" size={25} onClick={handleImageClick} />
          <Microphone weight="bold" size={25} onClick={handleMicrophoneClick} />
        </div>
      </div>
    </div>
  )
}

export default Chatbot
