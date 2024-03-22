import React, { useState } from 'react';

const DrawerMenu = () => {
  // An example list of topics and subtopics
  const menuItems = [
    { topic: 'Home', subTopics: [] },
    { topic: 'Topic2', subTopics: ['SubTopic4', 'SubTopic5'] },
    { topic: 'Topic3', subTopics: ['SubTopic6', 'SubTopic7'] },
    { topic: 'Topic4', subTopics: ['SubTopic8', 'SubTopic9'] },
    { topic: 'Topic5', subTopics: ['SubTopic10', 'SubTopic11'] },
    { topic: 'Topic6', subTopics: ['SubTopic12', 'SubTopic13'] },
    { topic: 'Topic7', subTopics: ['SubTopic1', 'SubTopic2', 'SubTopic3','SubTopic1', 'SubTopic2', 'SubTopic3'] },
    
    // Add more topics with subtopics as needed
  ];

  // State to track which topic's subtopics are currently shown
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle click event on a topic
  const handleTopicClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active index
  };

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const overflow = rect.right - window.innerWidth;
      if (overflow > 0) {
        ref.current.style.left = `-${overflow}px`;
      }
    }
  }, [activeIndex]);

  return (
    <div className="bg-slate-800 w-full">
      <ul className="flex flex-row justify-center items-center gap-x-8 space-y-2">
        {menuItems.map((item, index) => (
          <div><li key={item.topic} className="relative ">
            <button
              onClick={() => handleTopicClick(index)}
              className="flex justify-between items-center w-full text-left"
            >
              {item.topic}
            </button>
            {/* Underline for topic */}
            <div className="h-1 bg-black w-full"></div>
            {/* Subtopic drawer */}
            {activeIndex === index && (
              <ul ref={ref} className="flex flex-row start absolute top-full left-0 min-w-max bg-slate-700 overflow">
                {item.subTopics.map((subTopic) => (
                  <li key={subTopic} className="py-2 px-4 hover:bg-gray-500">
                    {subTopic}
                    {/* Underline for subtopic */}
                    <div className="h-0.5 bg-black w-full mt-2"></div>
                  </li>
                ))}
              </ul>
            )}
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DrawerMenu;