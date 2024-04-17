import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '~/components/molecules/Card/CardButton'

import Card1 from '~/assets/static/images/aboutUs/card1.png'
import Card2 from '~/assets/static/images/aboutUs/card2.png'
import Card3 from '~/assets/static/images/aboutUs/card3.png'
import Card4 from '~/assets/static/images/aboutUs/card4.png'
import Card5 from '~/assets/static/images/aboutUs/card5.png'
import Card7 from '~/assets/static/images/aboutUs/card7.png'

import AcordeonQuestions from '~/components/organisms/AccordeonQuestions/AcordeonQuestions'
import Title from '~/components/atoms/Title/Title'
import Input from '~/components/atoms/Title/InputText'
import { useI18n } from '~/i18n'

export default function FAQ() {
  const [Category, setCategory] = useState<string>('')
  const [text, setText] = useState<string>('')

  const {
    faq: {
      sectionCardsQuestionsTopics: { cards, title },
    },
  } = useI18n()

  function sendCategory(event: string) {
    //console.log('Child did:', event);
    setCategory(event)
  }

  function textSearch(event: string) {
    //console.log('Child did:', event);
    setText(event)
    setCategory('')
  }

  function acordeon() {
    if (Category === 'none') return (
      <>
        <br>
        </br>
      </>
    );
    else return (
      <AcordeonQuestions Category={Category} TextSearch={text} />
    )
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Input handleAction={textSearch} />
      <div className="flex max-w-[1440px] flex-col items-center justify-center ">
        <Title
          Text={title}
          H={'h1'}
          TitleClassProps={
            'w-[100%] mt-8 ml-[20px] sm:w-auto md:w-auto lg:w-auto xl:w-[100%]'
          }
        />
        <Card
          CardsData={cards}
          CardClassProps="hover:border hover:border-[#30DA74]
                          flex flex-col 
                          text-center items-center justify-center 
                          w-[197px] h-[150px] 
                          sm:w-1/1 md:w-[197px] lg:w-[197px] xl:w-[197px] mb-4 mt-4 
                          rounded-[11.49px] ml-4 bg-[#F3F4F6] "
          handleAction={sendCategory}
          Category={Category}
        />

        <AcordeonQuestions Category={Category} TextSearch={text} />
      </div>
    </div>
  )
}
