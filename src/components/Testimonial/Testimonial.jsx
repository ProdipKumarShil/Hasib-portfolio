import quote from '../../assets/quote.png'

const Testimonial = () => {
  return (
    <div className="bg-[#080808] py-20">
      <div className=" mb-[60px] px-2">
        <p className="text-[34px] font-raleway font-extrabold text-center mb-[10px] text-white">Get In Touch</p>
        <p className="text-[14px] font-ibm text-[#9C9C9C] max-w-[570px] text-center mx-auto leading-6">Solving user & business problems since last 15+ years. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[62px] px-2">
        <ReviewCard />
        <ReviewCard /><ReviewCard /><ReviewCard />
      </div>
    </div>
  )
}

export default Testimonial

const ReviewCard = () => {
  return(
    <div className="border-[#9C9C9C] border rounded p-7 relative">
      <img className='absolute -top-[12px]' src={quote} alt="" />
      <p className="text-[#9C9C9C] font-ibm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className="flex gap-5 items-center mt-[30px] ">
        <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png" alt="" />
        <p className="text-[18px] font-bold font-raleway text-white">Client Name</p>
      </div>
    </div>
  )
}