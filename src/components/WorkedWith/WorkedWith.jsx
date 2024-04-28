import logo1 from '../../assets/logos2/apolloio.png'
import logo2 from '../../assets/logos2/clearbit.png'
import logo3 from '../../assets/logos2/gg.png'
import logo4 from '../../assets/logos2/salesql.png'
import logo5 from '../../assets/logos2/webscraper.png'

const WorkedWith = () => {
  return (
    <div>
      <div className="pb-[45px] max-w-screen-xl mx-auto mb-20">
          <p className="font-ibm text-black mb-5 px-2">Worked with</p>
          <div className="flex justify-around md:justify-between items-center gap-4 flex-wrap px-2 ">
            <div className="">
              <img className='w-[150px] h-[40px] object-cover' src={logo1} alt="" />
            </div>
            <div className="">
              <img className='w-[150px] h-[40px] object-cover' src={logo2} alt="" />
            </div>
            <div className="">
              <img className='w-[150px] h-[30px] ' src={logo3} alt="" />
            </div>
            <div className="">
              <img className='w-[150px] h-[40px] object-cover' src={logo4} alt="" />
            </div>
            <div className="">
              <img className='w-[150px] h-[50px] object-cover' src={logo5} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default WorkedWith