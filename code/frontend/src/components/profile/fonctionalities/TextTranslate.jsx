import TypographyCard from 'components/cards/TypographyCard'
import TextArea from 'components/textArea/TextArea'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TextTranslate = () => {

  const textTranslation = useSelector((state) => state.textSummarySlice.textTranslate)
  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)

  // Use useEffect to perform side effect when textSummary changes
  useEffect(() => {
    // Here you can perform any side effect when textSummary changes
    // For example, you can update the DOM or trigger any other action
    console.log('textSummary changed:', textTranslation)
  }, [textTranslation])


  return (
    <div className="gridTextArea">
      <TextArea action={'translate'} />
      <TypographyCard title={'Text Translation'} text={textTranslation} load={loading} err={error} />
    </div>
  )
}

export default TextTranslate
