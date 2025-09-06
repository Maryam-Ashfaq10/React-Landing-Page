import { useTypewriter } from 'react-simple-typewriter'
import { useState } from "react";
import ApplicationForm from './OnboardingForm'

const PageBody = () => {
  const [typeEffect] = useTypewriter({
    words: ['SCALABLE', 'STRONG', 'PROMISING'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  })

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className='text-[#93a6ed]'>
        <div className='max-w-[700px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
          <p className='font-bold p-2'>THE PERFECT DESTINATION FOR YOUR IT SOLUTIONS. </p>
          <h2 className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>MAKE YOUR BUSINESS  <span>{typeEffect}</span></h2>
          <button
            className='bg-[#c365a2] w-[200px] rounded-md my-6 mx-auto py-3 text-white'
            onClick={() => setShowForm(true)}>
            START NOW
          </button>
        </div>

      </div>

      
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
              >
                ✕
              </button>

              <ApplicationForm />

            </div>
          </div>
        )}
    </>

  )
}

export default PageBody
