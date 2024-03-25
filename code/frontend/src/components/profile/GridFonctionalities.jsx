import React from 'react'
import FunctionCards from '../cards/FonctionCards'
import { CodeSimple, Lightbulb, Lightning, PencilSimple } from 'phosphor-react'

const GridFonctionalities = () => {
  return (
    <div className="grid">
      <FunctionCards
        link={'/profile/text_sammury'}
        title={'Summarize information'}
        description={'can produce a summary for a conversation or from a document'}
        icon={<PencilSimple weight="bold" size={25} />}
      />
      <FunctionCards title={'Subtitling media content'} description={'subtitles on recorded multimedia content'} icon={<Lightbulb weight="bold" size={25} />} />

      <FunctionCards
        title={'Real-time subtitles'}
        description={' Real-time captioning is used for live content'}
        icon={<Lightning weight="bold" size={25} />}
      />
      <FunctionCards
        title={'Summarize Meetings'}
        description={'can produce a summary for a conversation or from a document'}
        icon={<CodeSimple weight="bold" size={25} />}
      />
      <FunctionCards
        title={'Save meeting transcriptions'}
        description={'Integrate extension to chrome to save meeting transcriptions'}
        icon={<CodeSimple weight="bold" size={25} />}
      />
       <FunctionCards
        title={'Save meeting transcriptions'}
        description={'Integrate extension to chrome to save meeting transcriptions'}
        icon={<CodeSimple weight="bold" size={25} />}
      />
       <FunctionCards
        title={'Save meeting transcriptions'}
        description={'Integrate extension to chrome to save meeting transcriptions'}
        icon={<CodeSimple weight="bold" size={25} />}
      />
       <FunctionCards
        title={'Save meeting transcriptions'}
        description={'Integrate extension to chrome to save meeting transcriptions'}
        icon={<CodeSimple weight="bold" size={25} />}
      />
    </div>
  )
}

export default GridFonctionalities
