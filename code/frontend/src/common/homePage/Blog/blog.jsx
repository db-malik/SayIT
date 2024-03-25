import React from 'react'
import { Article } from '../../../components'

import { blog01, blog02, blog03, blog04, blog05 } from './imports'

import './blog.css'

import { blogs } from "../../../data/blogs"

const blogLinks = [
  {
    title: 'Unlocking the Potential of Natural Language Processing (NLP) in Everyday Life',
    imgUrl: blog01,
    id: '1',
    text: "This post will take you a beginner's guide to Natural Language Processing. A language is a way we humans, communicate with each other. Each day we produce data from emails, SMS, tweets, etc. we must have methods to understand these type of data, just like we do for other types of data. We will learn some of the basic but important techniques in Natural Language Processing. In simple terms, Natural language processing (NLP) is the ability of computers to understand human speech as it is spoken. NLP helps to analyze, understand, and derive meaning from human language in a smart and useful way. NLP algorithms are machine learning algorithms based. NLP learns by analyzing a set of examples (i.e. a large corpus, like a book, down to a collection of sentences), and making a statistical inference, instead of coding large sets of rules. We can organize the massive chunks of text data and solve a wide...",
    full_text: [
      {
        title: '',
        paragraph:
          'In the rapidly advancing world of technology, Natural Language Processing (NLP) stands out as a revolutionary force, transforming the way we communicate, learn, and work. This cutting-edge branch of artificial intelligence empowers machines to understand, interpret, and generate human language, bringing about a paradigm shift in various industries.',
      },
      {
        title: 'The Power of Seamless Communication',
        paragraph:
          "At the forefront of NLP's impact is its ability to facilitate seamless communication between humans and machines. Chatbots, virtual assistants, and voice-activated systems have become commonplace, providing users with natural and intuitive interactions. NLP enables these systems to not only comprehend the intricacies of language but also respond contextually, creating a more engaging and user-friendly experience.",
      },
      {
        title: 'Redefining Business Intelligence      ',
        paragraph:
          'Businesses are increasingly recognizing the potential of NLP in extracting valuable insights from unstructured data. Automated language processing tools can analyze vast amounts of textual information, enabling businesses to gain a deeper understanding of customer preferences, market trends, and employee sentiments. This newfound business intelligence enhances decision-making processes and contributes to overall operational efficiency.',
      },
      {
        title: 'Transforming Education with Personalization',
        paragraph:
          'In the realm of education, NLP is fostering a personalized learning experience. Intelligent tutoring systems, powered by NLP algorithms, adapt to individual student needs. These systems provide tailored feedback, identify learning patterns, and offer customized content, revolutionizing the way students engage with educational materials. Language learning applications, in particular, leverage NLP to create interactive and context-aware exercises that enhance language acquisition.',
      },
      {
        title: 'SayIt: A Practical Application for Students',
        paragraph:
          'One tangible example of NLP making a difference in everyday life is the web extension SayIt. Specifically designed for students, SayIt takes note-taking to a whole new level. Accessible exclusively through a web extension, SayIt allows students to effortlessly capture and organize meeting notes. The smart automated meeting summaries ensure that vital information is not only retained but easily accessible, providing students with a valuable tool for staying organized and focused during virtual or in-person classes.',
      },
      {
        title: "Looking Ahead: NLP's Continued Evolution",
        paragraph:
          'As we witness the continual evolution of NLP, the possibilities seem limitless. From refining communication to automating intricate processes, NLP is reshaping our expectations of what technology can achieve. As the technology advances, we can anticipate even more sophisticated applications that further enhance our daily lives, making tasks more intuitive, efficient, and personalized.',
      },
      {
        title: 'conclusion',
        paragraph:
          "In conclusion, Natural Language Processing is not merely a technological advancement; it's a transformative force that is reshaping the way we interact with the digital world. Whether it's the streamlined communication facilitated by chatbots, the business intelligence extracted from textual data, or the personalized learning experiences in education, NLP is undoubtedly paving the way for a more connected, efficient, and intelligent future.",
      },
    ],
  },
  {
    title: 'Speech Recognition',
    imgUrl: blog02,
    id: '2',
    link: 'https://jonathan-hui.medium.com/speech-recognition-deep-speech-ctc-listen-attend-and-spell-d05e940e9ed1',
    text: 'Deep Learning (DL) changes many Machine Learning (ML) fields that heavily depend on domain knowledge. Decades of research in modeling this domain knowledge can be replaced with DL models with higher accuracy and less manual labor. In this article, we will...',
  },
  {
    title: 'Text Summarisation Using Deep Learning',
    imgUrl: blog03,
    id: '3',
    link: 'https://medium.com/@blogsupport/link-summarization-using-deep-learning-techniques-fb9fb628881d',
    text: 'The amount of data produced every day is mind-boggling. To put things in perspective, in the last two years alone 90% of the world’s data is generated. Every minute, more than 120 professionals join LinkedIn, and the favourite search engine of the world processes 40,000 searches every minute...',
  },
  {
    title: 'Speech to Text Conversion',
    imgUrl: blog04,
    id: '4',
    link: 'https://towardsdatascience.com/easy-speech-to-link-with-python-3df0d973b426',
    text: 'Speech is the most common means of communication and the majority of the population in the world relies on speech to communicate with one another. Speech recognition system...',
  },
  {
    title: 'Coding In Deep Learning',
    imgUrl: blog05,
    id: '5',
    link: 'https://towardsdatascience.com/coding-deep-learning-for-beginners-start-a84da8cb5044',
    text: 'Intuition based series of articles about Neural Networks dedicated to programmers who want to understand basic math behind the code and non-programmers who want to know how to turn math into code...',
  },
]

const Blog = () => {
  return (
  <div className="bg11Blog sectionPadding" id="blog">
    <div className="bg11BlogHeading">
      <h1 className="gradientText">
        A lot is happening about this, <br /> Our Refrences for Deep Learning.
      </h1>
    </div>
    <div className="bg11BlogContainer">
      <div className="bg11BlogContainerGroupA">
        <Article imgUrl={blog01} title={blogs[0].title} link={blogs[0].link} id={blogs[0].id} textContent={blogs[0].text} />
      </div>
      <div className="bg11BlogContainerGroupB">
        {blogLinks.map((item) => (
          <>{ <Article imgUrl={item.imgUrl} title={item.title} link={item.link} key={item.id} id={item.id} textContent={item.text} /> }</>
        ))}
      </div>
    </div>
  </div>
)
        }
export default Blog
