import TypographyCard from 'components/cards/TypographyCard'
import TextArea from 'components/textArea/TextArea'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TextSammury = () => {
  const textSummary = useSelector((state) => state.textSummarySlice.textSummary)
  const loading = useSelector((state) => state.textSummarySlice.loading)
  const error = useSelector((state) => state.textSummarySlice.error)

 

  // Use useEffect to perform side effect when textSummary changes
  useEffect(() => {
    // Here you can perform any side effect when textSummary changes
    // For example, you can update the DOM or trigger any other action
    console.log(loading)
    console.log('textSummary changed:', textSummary)
  }, [textSummary, loading])

  return (
    <div className="gridTextArea">
      <TextArea action={'summarize'} />
      <TypographyCard  title={'Text Summary'} text={textSummary} load={loading} err={error} />
    </div>
  )
}

export default TextSammury
