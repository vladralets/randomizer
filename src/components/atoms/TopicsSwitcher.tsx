
interface ITopicsSwitcherProps {
    topics: string[];
    setTopics: (topic: string) => void;
}

const TopicsSwitcher = (
    { topics, setTopics }: ITopicsSwitcherProps
) => {

    const handleTopicsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopics(e.target.name);
    }

  return (
    <div className="mb-16">
        <form action="" className="flex justify-between">
            {
                topics.map((topic, index) => (
                    <label key={index} className="mr-4">
                        <input 
                            type="checkbox" 
                            name={topic} 
                            checked={topics.includes(topic)} 
                            onChange={handleTopicsChange}
                        />
                        {topic}
                    </label>
                ))
            }
        </form>
    </div>
  )
}

export default TopicsSwitcher