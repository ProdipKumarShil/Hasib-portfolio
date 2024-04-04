
const GetInTouch = () => {
  return (
    <>
      <div className="bg-[#080808] py-20">
        <div className=" mb-[60px] px-2">
          <p className="text-[34px] font-raleway font-extrabold text-center mb-[10px] text-white">Get In Touch</p>
          <p className="text-[14px] font-ibm text-[#9C9C9C] max-w-[570px] text-center mx-auto leading-6">Solving user & business problems since last 15+ years. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="">
          <div className="max-w-[350px] mx-auto mb-5">
            <label className="block font-semibold font-ibm text-[12px] text-white mb-[5px]">Name</label>
            <input className="w-full h-10 font-ibm text-[#9C9C9C] px-2 rounded" placeholder="Enter your Name" type="text" />
          </div>
          <div className="max-w-[350px] mx-auto mb-5">
            <label className="block font-semibold font-ibm text-[12px] text-white mb-[5px]">Email</label>
            <input className="w-full h-10 font-ibm text-[#9C9C9C] px-2 rounded" placeholder="Enter your Email" type="email" />
          </div>
          <div className="max-w-[350px] mx-auto mb-5">
            <label className="block font-semibold font-ibm text-[12px] text-white mb-[5px]">Message</label>
            <textarea rows={5} className="w-full font-ibm text-[#9C9C9C] px-2 rounded" placeholder="Enter your Message" type="email"></textarea>
          </div>
          <button className="w-[350px] block mx-auto mt-8  items-center justify-center rounded-[4px] bg-secondary py-3 px-6 font-ibm text-base font-medium text-white shadow-xl shadow-[#3f8e0059] transition-transform duration-200 ease-in-out hover:scale-[1.02]">Submit</button>
        </div>

      </div>
      <div className="bg-[#1B1B1B] py-5">
        <p className="text-[#9C9C9C] font-raleway text-center text-xs">Made With <a target="_" href="https://www.linkedin.com/in/prodipkumarshil/"><i className="font-ibm">PK</i></a></p>
      </div>
    </>
  )
}

export default GetInTouch