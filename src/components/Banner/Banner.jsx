
// import logo1 from '../../assets/logos/logo1.png'
// import logo2 from '../../assets/logos/logo2.png'
// import logo3 from '../../assets/logos/logo3.png'
// import logo4 from '../../assets/logos/logo4.png'
// import logo5 from '../../assets/logos/logo5.png'

import logo1 from '../../assets/logos2/apolloio.png'
import logo2 from '../../assets/logos2/clearbit.png'
import logo3 from '../../assets/logos2/contactout.png'
import logo4 from '../../assets/logos2/salesql.png'
import logo5 from '../../assets/logos2/webscraper.png'

const Banner = () => {
  return (
    <div className="bg-primary mb-[80px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 justify-items-center px-2 gap-7">
          <div className="">
            <p className="font-raleway font-extrabold text-[44px] text-white mb-5">MD Hasib</p>
            <p className="font-ibm text-[#9C9C9C] mb-[30px] max-w-[492px]">Skilled in data entry and lead generation, with 4 years and 3.5 years of experience respectively. Meticulous attention to detail, strong analytical skills, and consistent high-quality results within tight deadlines.</p>
            <a target='_blank' href='https://www.linkedin.com/in/mdhasibmolla/' className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-secondary py-3 px-6 font-ibm text-base font-medium text-white shadow-xl shadow-[#3f8e0059] transition-transform duration-200 ease-in-out hover:scale-[1.02]">Let’s get started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </a>
          </div>
          <div className="">
            <img className='w-[350px] h-[350px] rounded-full object-cover' src="https://res.cloudinary.com/dwhhe5dgs/image/upload/v1712298624/portfolios/hasib/hasib2_ezqdhl.jpg" alt="" />
          </div>
        </div>
        {/* <div className="pb-[45px]">
          <p className="font-ibm text-white mb-5 px-2">Worked with</p>
          <div className="flex justify-around md:justify-between gap-4 flex-wrap px-2">
            <WorkPic logo={logo1} />
            <WorkPic logo={logo2} />
            <WorkPic logo={logo3} />
            <WorkPic logo={logo4} />
            <WorkPic logo={logo5} />
            <div className="bg-white">
              <img className='w-[150px] h-[40px] object-cover' src={logo1} alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Banner

const WorkPic = ({ logo }) => {
  return (
    <div className="border-[#1B1B1B] rounded border ">
      <img className='md:px-[38px] md:py-[20px]  px-[18px] py-[10px] w-[150px] h-[25px]' src={logo} />
    </div>
  )
}