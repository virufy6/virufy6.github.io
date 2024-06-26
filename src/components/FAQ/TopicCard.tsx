import Image from 'next/image'
import { type FAQTopicCard } from '~/i18n/types/FAQ'

interface Props extends FAQTopicCard {
  defaultTopic: string
  selectedTopic: string
  setSelectedTopic: React.Dispatch<React.SetStateAction<string>>
}

const TopicCard = ({
  img,
  altText,
  title,
  defaultTopic,
  selectedTopic,
  setSelectedTopic,
}: Props) => {
  const bgStyle =
    title === selectedTopic
      ? 'border border-green-400 bg-blue-950'
      : 'bg-gradient-to-b from-[#3578de] to-[#1c5cbd] border border-transparent'

  const handleTopicClick = (): void => {
    // deselect selected topic and reset to default topic
    if (selectedTopic === title) {
      setSelectedTopic(defaultTopic)
      return
    }
    setSelectedTopic(title)
  }

  return (
    <div
      onClick={handleTopicClick}
      className={`flex cursor-pointer flex-col justify-between space-y-2 rounded-xl px-6 py-4 text-center shadow-lg sm:px-9 ${bgStyle}`}
    >
      <Image className="mx-auto" src={img} alt={altText} />
      <h3>{title}</h3>
    </div>
  )
}

export default TopicCard
