import TypographyCard from 'components/cards/TypographyCard'
import TextArea from 'components/textArea/TextArea'
import React from 'react'
import {  useSelector } from 'react-redux'

const TextTranslate = () => {

  const textTranslated = useSelector((state) => state.textTranslation.textTranslated)
  const loading = useSelector((state) => state.textTranslation.loading)
  const error = useSelector((state) => state.textTranslation.error)

  return (
    <div className="gridTextArea">
      <TextArea action={'translate'}/>
      <TypographyCard title={'Text Translation'} text={textTranslated.text} load={loading} err={error} />
    </div>
  )
}

export default TextTranslate
