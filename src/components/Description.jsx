import React, { useState } from 'react'

const Description = () => {
  // Manage the active section (default is "Return policy")
  const [activeSection, setActiveSection] = useState('Return policy');

  // Define the content for each section
  const renderContent = () => {
    switch (activeSection) {
      case 'How to use':
        return <p>This product should be used as follows: ... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex. return Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex. return Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, </p>;
      case 'Benefits':
        return <p>The benefits of this product include: ... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex. return Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex. return Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut.</p>;
      case 'Ingredients':
        return <p>The ingredients in this product are: ... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex. return Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex. return Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>;
      case 'Return policy':
        return <p>Our return policy is as follows: ... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex. return Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex. return Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ad expedita exercitationem culpa soluta inventore quasi repudiandae tempore, voluptas quo aspernatur, eius ut, magnam rem voluptatem eaque accusantium unde ex.</p>;
      default:
        return null;
    }
  };
  return (
    <div className="w-full pt-2">
      <div className="flex overflow-x-auto scrollbar-hide pb-3 border-b-[1px] border-b-brown4 w-full">
        <div className="flex w-max space-x-4 md:space-x-24 lg:space-x-16">
          <button
            onClick={() => setActiveSection('How to use')}
            className={`font-semibold text-[15px] md:text-lg whitespace-nowrap cursor-pointer ${activeSection === 'How to use' ? 'hover:-translate-y-2 duration-200 transition-all' : ''}`}
          >
            How to use
          </button>
          <button
            onClick={() => setActiveSection('Benefits')}
            className={`font-semibold text-[15px] md:text-lg whitespace-nowrap cursor-pointer ${activeSection === 'Benefits' ? 'hover:-translate-y-2 duration-200 transition-all' : ''}`}
          >
            Benefits
          </button>
          <button
            onClick={() => setActiveSection('Ingredients')}
            className={`font-semibold text-[15px] md:text-lg whitespace-nowrap cursor-pointer ${activeSection === 'Ingredients' ? 'hover:-translate-y-2 duration-200 transition-all' : ''}`}
          >
            Ingredients
          </button>
          <button
            onClick={() => setActiveSection('Return policy')}
            className={`font-semibold text-[15px] md:text-lg whitespace-nowrap cursor-pointer ${activeSection === 'Return policy' ? 'hover:-translate-y-2 duration-200 transition-all' : ''}`}
          >
            Return policy
          </button>
        </div>
      </div>

      {/* <div className="flex overflow-x-auto space-x-6 md:space-x-24 lg:space-x-16 pb-3 border-b-[1px] border-b-brown4">
        <button
        onClick={() => setActiveSection('How to use')}
        className={`font-semibold text-[15px] md:text-lg cursor-pointer ${activeSection === 'How to use' ? 'hover:-translate-y-2 duration-200 transition-all' : ''}`}
        >
          How to use
        </button>
        <button
        onClick={() => setActiveSection('Benefits')}
        className={`font-semibold text-[15px] md:text-lg cursor-pointer ${activeSection === 'Benefits' ? 'hover:-translate-y-2 duration-200 transition-all' : ''}`}
        >
          Benefits
        </button>
        <button
        onClick={() => setActiveSection('Ingredients')}
        className={`font-semibold text-[15px] md:text-lg cursor-pointer ${activeSection === 'Ingredients' ? 'hover:-translate-y-2 duration-200 transition-all' : ''}`}
        >
          Ingredients
        </button>
        <button
        onClick={() => setActiveSection('Return policy')}
        className={`font-semibold text-[15px] md:text-lg cursor-pointer ${activeSection === 'Return policy' ? 'hover:-translate-y-2 duration-200 transition-all ' : ''}`}
        >
          Return policy
        </button>
      </div> */}

      {/* Content Section */}
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  )
}

export default Description
