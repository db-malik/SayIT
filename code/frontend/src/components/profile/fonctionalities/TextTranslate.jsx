import TypographyCard from 'components/cards/TypographyCard'
import TextArea from 'components/textArea/TextArea'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TextTranslate = () => {

  const textTranslated = useSelector((state) => state.textTranslation.textTranslated)
  const loading = useSelector((state) => state.textTranslation.loading)
  const error = useSelector((state) => state.textTranslation.error)

  // Use useEffect to perform side effect when textSummary changes
  useEffect(() => {
    // Here you can perform any side effect when textSummary changes
    // For example, you can update the DOM or trigger any other action
    console.log('textSummary changed:', textTranslated)
  }, [textTranslated])


  return (
    <div className="gridTextArea">
      <TextArea action={'translate'} />
      <TypographyCard title={'Text Translation'} text={textTranslated.text} load={loading} err={error} />
    </div>
  )
}

export default TextTranslate
