import debounce from 'lodash.debounce'
import Image from 'next/image'
import { Fragment, useEffect, useMemo, useState } from 'react'
import AccordionItem from '~/components/FAQ/AccordionItem'
import TopicCard from '~/components/FAQ/TopicCard'
import { useI18n } from '~/i18n'
import type { QA } from '~/i18n/types/FAQ'

const DEFAULT_TOPIC = 'Common Questions'
const DEBOUNCE_TIME_MS = 500

const FAQPage = () => {
  const {
    FAQ: { headerSection, topicsSection, questionsByTopic },
  } = useI18n()

  // prevent recomputation after every re-render
  const allQuestions: QA[] = useMemo(
    () => Object.values(questionsByTopic).flat(),
    [questionsByTopic],
  )

  const [filteredQuestions, setFilteredQuestions] = useState(allQuestions)
  const [selectedTopic, setSelectedTopic] = useState(DEFAULT_TOPIC)
  const [searchInput, setSearchInput] = useState('')

  // filter questions by search input
  useEffect(() => {
    let filteredQuestionsByTopic = allQuestions

    // filter questions by topic
    if (selectedTopic !== DEFAULT_TOPIC) {
      filteredQuestionsByTopic = []
      if (selectedTopic in questionsByTopic) {
        filteredQuestionsByTopic = questionsByTopic[selectedTopic]
      }
    }
    // filter remaining questions by search input
    const remainingQuestions = filteredQuestionsByTopic.filter(
      ({ question, answer }) =>
        question.toLowerCase().indexOf(searchInput) !== -1 ||
        answer.toLowerCase().indexOf(searchInput) !== -1,
    )

    setFilteredQuestions(remainingQuestions)
  }, [searchInput, selectedTopic, questionsByTopic, allQuestions])

  // delay setting state and triggering a re-render
  const handleSearchInputChange = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchInput(e.target.value.toLowerCase().trim())
      }, DEBOUNCE_TIME_MS),
    [],
  )

  return (
    <div className="relative -top-24">
      {/* Hero Section */}
      <section>
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <Image
            className="absolute h-full w-full object-cover opacity-50"
            src={headerSection.img}
            alt={headerSection.altText}
            priority
          />

          {/* Text and Input Container */}
          <div className="relative flex flex-col items-center justify-center pt-32 pb-8 md:pt-72 md:pb-48">
            {/* Sizing & Spacing Container */}
            <div className="px-8 text-center font-medium text-white">
              {/* Header */}
              <h1 className="mb-3 text-2xl font-medium md:mb-8 md:text-5xl md:font-normal">
                {headerSection.title.map((content, i) =>
                  content.type === 'span' ? (
                    <span key={i} className="text-emerald-500">
                      {content.text}
                    </span>
                  ) : (
                    <Fragment key={i}>{content.text}</Fragment>
                  ),
                )}
              </h1>

              {/* Input Container */}
              <div className="relative mb-2 flex items-center md:mb-8">
                <input
                  className="w-full rounded-full py-4 pl-5 pr-12 text-xs text-neutral-500 sm:pr-14 sm:pl-8 sm:text-sm md:w-[680px] md:text-base"
                  type="search"
                  placeholder={headerSection.input.placeholder}
                  onChange={handleSearchInputChange}
                  maxLength={64}
                  aria-label="Search"
                />
                <span className="absolute right-0 pr-4 sm:pr-6">
                  <Image
                    src={headerSection.input.img}
                    alt={headerSection.input.altText}
                  />
                </span>
              </div>

              {/* Text Beneath Search Input */}
              <p className="pl-5 text-left text-xs sm:text-sm md:text-center md:text-base">
                {headerSection.texts.map((text, i) =>
                  text.type === 'span' ? (
                    <span className="font-bold" key={i}>
                      {text.text}
                    </span>
                  ) : (
                    <Fragment key={i}>{text.text}</Fragment>
                  ),
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="-mb-24 bg-gradient-to-b from-[#162b4c] to-[#3468b2] text-white">
        {/* Topics Section */}
        <section>
          {/* Title and Topic Cards Container */}
          <div className="flex flex-col items-center justify-center space-y-6 pt-10 text-center md:space-y-10 md:pt-20">
            <h2 className="text-lg font-medium md:text-3xl">
              {topicsSection.title}
            </h2>

            {/* Topic Cards Container */}
            <div className="mx-5 grid grid-cols-2 gap-6 text-xs md:grid-cols-3 md:text-base md:font-normal xl:grid-cols-6">
              {topicsSection.cards.map((card) => (
                <TopicCard
                  key={card.title}
                  defaultTopic={DEFAULT_TOPIC}
                  selectedTopic={selectedTopic}
                  setSelectedTopic={setSelectedTopic}
                  {...card}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section>
          {/* Title and Questions Container */}
          <div className="mx-5 flex flex-col items-center justify-center gap-y-4 py-10 md:gap-y-10 md:py-56 md:pt-24">
            <h2 className="text-lg font-medium md:text-3xl">{selectedTopic}</h2>

            {/* Questions Container */}
            <div className="max-w-md rounded-lg border-b bg-black bg-opacity-[28%] text-xs last:border-b-0 md:max-w-2xl md:text-base lg:max-w-4xl xl:max-w-5xl">
              {filteredQuestions &&
                filteredQuestions.map((content) => (
                  <AccordionItem {...content} key={content.question} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FAQPage
