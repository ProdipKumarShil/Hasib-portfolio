import dataEntry from '../../assets/caseStudies/data_entry.webp'
import diginer from '../../assets/caseStudies/desiginer.webp'

const CaseStudies = () => {
  return (
    <div>
      <div className=" mb-[60px] px-2">
        <p className="text-[34px] font-raleway font-extrabold text-center mb-[10px]">Case Studies</p>
        <p className="text-[14px] font-ibm text-[#9C9C9C] max-w-[570px] text-center mx-auto leading-6">Dive into real-world examples showcasing my proficiency in lead generation, precise data entry, and captivating graphics design. <br /> Explore successful strategies and tangible results achieved in each discipline. </p>
      </div>

      {/* 1st case */}
      <div className="grid grid-cols-1  md:grid-cols-2 max-w-screen-xl mx-auto md:gap-5 items-center px-2 mb-20">
        <div className="order-last md:order-1">
          <span className=" text-[#FFA217] font-ibm font-bold bg-[#FFF6E9] px-[10px] py-[5px] rounded-badge">Expert</span>
          <p className="text-[#080808] mt-[10px] font-raleway font-extrabold text-[24px]">Lead Generation Expert</p>
          <p className="text-[#9C9C9C] font-ibm ">Experienced lead generation expert skilled in driving targeted campaigns to fuel business growth. Proven track record in maximizing lead conversion rates and delivering measurable results.</p>
          <a href='https://www.linkedin.com/posts/mdhasibmolla_leadgeneration-b2bleadgeneration-b2b-activity-7147633578128850944-p9K-?utm_source=share&utm_medium=member_android' target='_' className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-[#FFA217] py-3 px-6 font-ibm text-base font-medium text-white shadow-xl shadow-[#ffc874b0] transition-transform duration-200 ease-in-out hover:scale-[1.02]">View case study</a>
        </div>
        <img className="h-[300px] order-1 md:order-last w-full object-cover rounded mb-5" src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhZCUyMGdlbmVyYXRpb258ZW58MHx8MHx8fDA%3D" alt="" />
      </div>

      {/* 2nd case */}
      <div className="grid grid-cols-1  md:grid-cols-2 max-w-screen-xl mx-auto md:gap-5 items-center px-2 mb-20">
        <div className="order-last ">
          <span className=" text-[#000AFF] font-ibm font-bold bg-[#D0E6FF] px-[10px] py-[5px] rounded-badge">Expert</span>
          <p className="text-[#080808] mt-[10px] font-raleway font-extrabold text-[24px]">Data Entry Specialist</p>
          <p className="text-[#9C9C9C] font-ibm ">Experienced data entry specialist with a meticulous eye for detail and a track record of maintaining accuracy and efficiency. Proficient in various data management software. Committed to delivering high-quality results.</p>
          <a href='https://www.linkedin.com/posts/mdhasibmolla_dataentry-b2bleadgeneration-virtualassistant-activity-7161679170505310208-3SsI/?utm_source=share&utm_medium=member_android' target='_' className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-[#000AFF] py-3 px-6 font-ibm text-base font-medium text-white shadow-xl shadow-[#77b7ffaf] transition-transform duration-200 ease-in-out hover:scale-[1.02]">View case study</a>
        </div>
        <img className="h-[300px] order-1 w-full object-cover rounded mb-5" src={dataEntry} alt="" />
      </div>

      {/* 3rd case */}
      <div className="grid grid-cols-1  md:grid-cols-2 max-w-screen-xl mx-auto md:gap-5 items-center px-2 mb-20">
        <div className="order-last md:order-1">
          <span className=" text-[#2AB090] font-ibm font-bold bg-[#E0FFF8] px-[10px] py-[5px] rounded-badge">Intermediate</span>
          <p className="text-[#080808] mt-[10px] font-raleway font-extrabold text-[24px]">Graphics Designer</p>
          <p className="text-[#9C9C9C] font-ibm ">Versatile graphic designer with a flair for creative solutions and a passion for visual storytelling. Proficient in Adobe Creative Suite. Dedicated to delivering captivating designs that resonate with audiences.</p>
          <button className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-[#2AB090] py-3 px-6 font-ibm text-base font-medium text-white shadow-xl shadow-[#5eccb292] transition-transform duration-200 ease-in-out hover:scale-[1.02]">View case study</button>
        </div>
        <img className="h-[300px] order-1 md:order-last w-full object-cover rounded mb-5" src={diginer} alt="" />
      </div>

    </div>
  )
}

export default CaseStudies