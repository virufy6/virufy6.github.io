import { useState } from 'react'
import type { QA } from '~/i18n/types/FAQ'
import ArrowIcon from './ArrowIcon'

const AccordionItem = ({ question, answer }: QA) => {
  const [isActive, setIsActive] = useState(false)
  const heightStyle = isActive ? 'max-h-96' : 'max-h-0'
  const borderTransitionStyle = isActive
    ? 'border-t border-gray-400'
    : 'border-transparent transition-all delay-500'

  return (
    <div className="border-b border-gray-400 last:border-b-0">
      {/* Question Container */}
      <div
        className="flex cursor-pointer items-center justify-between py-4 px-5"
        onClick={() => setIsActive(!isActive)}
      >
        <h3 className="pr-6 font-semibold">{question}</h3>
        <ArrowIcon isActive={isActive} />
      </div>

      {/* Answer Container */}
      {/* When accordion is not active, delay disappearance of top border */}
      <div className={`${borderTransitionStyle}`}>
        <div
          className={`overflow-hidden transition-all duration-500 ${heightStyle}
        }`}
        >
          <div className="px-5 py-4">
            <p className="leading-relaxed text-stone-300">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
