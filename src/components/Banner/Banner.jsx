
import logo1 from '../../assets/logos/logo1.png'
import logo2 from '../../assets/logos/logo2.png'
import logo3 from '../../assets/logos/logo3.png'
import logo4 from '../../assets/logos/logo4.png'
import logo5 from '../../assets/logos/logo5.png'

const Banner = () => {
  return (
    <div className="bg-primary mb-[80px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 justify-items-center">
          <div className="">
            <p className="font-raleway font-extrabold text-[44px] text-white mb-5">Your Name Here</p>
            <p className="font-ibm text-[#9C9C9C] mb-[30px] max-w-[492px]">Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-secondary py-3 px-6 font-ibm text-base font-medium text-white shadow-xl shadow-[#3f8e0059] transition-transform duration-200 ease-in-out hover:scale-[1.02]">Let’s get started ></button>
          </div>
          <div className="">
            <img className='w-[350px] h-[350px] rounded-full object-cover' src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww" alt="" />
          </div>
        </div>
        <div className="pb-[45px]">
          <p className="font-ibm text-white mb-5 px-2">Worked with</p>
          <div className="flex justify-around md:justify-between gap-4 flex-wrap px-2">
            <WorkPic logo={logo1} />
            <WorkPic logo={logo2} />
            <WorkPic logo={logo3} />
            <WorkPic logo={logo4} />
            <WorkPic logo={logo5} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

const WorkPic = ({logo}) => {
  return(
    <div className="border-[#1B1B1B] rounded border">
      <img className='md:px-[38px] md:py-[20px] scale-75 md:scale-100 px-[18px] py-[10px]' src={logo} />
    </div>
  )
}