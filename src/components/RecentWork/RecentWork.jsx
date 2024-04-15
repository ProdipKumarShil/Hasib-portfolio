import 'swiper/css'

const works = [
  {
    img: 'https://res.cloudinary.com/dwhhe5dgs/image/upload/v1712298393/portfolios/hasib/startup_u6fncq.jpg',
    name: '100 startup companies lead'
  },
  {
    img: 'https://res.cloudinary.com/dwhhe5dgs/image/upload/v1712298392/portfolios/hasib/amazon_s6dbig.jpg',
    name: 'Amazon seller in the USA'
  }
]


const RecentWork = () => {
  return (
    <div className='my-20'>
      <div className=" mb-[60px] px-2">
        <p className="text-[34px] font-raleway font-extrabold text-center mb-[10px]">Recent Work</p>
        <p className="text-[14px] font-ibm text-[#9C9C9C] max-w-[570px] text-center mx-auto leading-6">Solving user & business problems since last 15+ years. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-items-center px-2">
        {
          works.map((work, index) => <WorkCard key={index} work={work} /> )
        }
      </div>
    </div>
  )
}

export default RecentWork

const WorkCard = ({work}) => {
  return (
    <div className=" max-w-[445px] ">
      <img className="h-[300px] object-cover w-full rounded mb-10" src={work.img} alt="" />
      <p className="font-raleway text-[24px] font-extrabold mb-5 capitalize">{work.name}</p>
      <p className="font-ibm text-[#9C9C9C] mb-5">Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      <button className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-secondary py-[10px] px-6 font-ibm text-base font-medium text-white shadow-xl shadow-[#3f8e0059] transition-transform duration-200 ease-in-out hover:scale-[1.02]">Know more</button>
    </div>
  )
}