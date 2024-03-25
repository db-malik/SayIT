import React from 'react'
import { Icon, Avatar } from 'antd'

function Message(props) {
  const AvatarSrc = props.who === 'bot' ? <Icon type="robot" /> : <Icon type="smile" />

  return (
    <div style={{ padding: '10px 30px' }}>
      <span
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Avatar icon={AvatarSrc} />
        <span style={{ color: props.who === 'bot' ? 'blue' : 'lightblue', margin: '0 10px' }}>{props.who} : </span>
      </span>

      <div style={{ marginTop: '2px', marginLeft: '15px' }}>{props.text}</div>
    </div>
  )
}

export default Message
