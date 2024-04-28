import quote from '../../assets/quote.png'

const Testimonial = () => {
  return (
    <div className="bg-[#080808] py-20">
      <div className=" mb-[60px] px-2">
        <p className="text-[34px] font-raleway font-extrabold text-center mb-[10px] text-white">Testimonial</p>
        <p className="text-[14px] font-ibm text-[#9C9C9C] max-w-[570px] text-center mx-auto leading-6">Discover What Our Clients Say About Us. <br /> Explore Their Stories, Experiences, and Insights. Real Feedback from Real People, Sharing Their Journey with Our Services. <br /> Dive into Our Testimonials Section and Get Inspired by the Impact We've Made in Their Lives and Businesses.</p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[62px] px-2">
        <ReviewCard name="Karen R. Brown" txt={"Hasib did a great job of understanding what I was looking for and set me up with some excellent lead generation profiles. I would definitely recommend her for anyone looking to obtain high-quality leads. Thanks very much for your help!"} />
        <ReviewCard name="Tammy Huff" txt={"Hasib did a great job listening to my requests and made sure to deliver a list of prospects that match my criteria. I would definitely use her services again when I am ready to expand my client search base. Very satisfied."} />
        <ReviewCard name="Roux Pelletier" txt={"This is my second project with Hasib and I've already ordered my third. She is adept at finding and qualifying contact information. Most importantly, she saves me time, allowing me to focus on higher value tasks, which is very important b/c I am a one-person sales, marketing, and customer service department."} />
        <ReviewCard name="Brian Laughlin" txt={"Very professional, fast to respond and completed the job far ahead of schedule. The leads are detailed and correct. The price is far less than many sellers you wont find a better deal on Fiverr and I am a professional sales leads company with 17 years in business I know good leads when I see them."} />
      </div>
    </div>
  )
}

export default Testimonial

const ReviewCard = ({ txt, name }) => {
  return (
    <div className="border-[#9C9C9C] border rounded p-7 relative">
      <img className='absolute -top-[12px]' src={quote} alt="" />
      <p className="text-[#9C9C9C] font-ibm">{txt}</p>
      <div className="flex gap-5 items-center mt-[30px] ">
        <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png" alt="" />
        <p className="text-[18px] font-bold font-raleway text-white">{name}</p>
      </div>
    </div>
  )
}