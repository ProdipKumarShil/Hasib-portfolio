
const RecentWork = () => {
  return (
    <div>
      <div className=" mb-[60px]">
        <p className="text-[34px] font-raleway font-extrabold text-center mb-[10px]">Recent Work</p>
        <p className="text-[14px] font-ibm text-[#9C9C9C] max-w-[570px] text-center mx-auto leading-6">Solving user & business problems since last 15+ years. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div className="">
        <WorkCard />
        <WorkCard />
        <WorkCard />

        

      </div>

    </div>
  )
}

export default RecentWork

const WorkCard = () => {
  return(
    <div className="">
      <img className="h-[300px] max-w-[445px] object-cover rounded mb-10" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <p className="font-raleway text-[24px] font-extrabold mb-5">Work name here</p>
      <p className="font-ibm text-[#9C9C9C] mb-5">Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      <button className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-secondary py-[10px] px-6 font-ibm text-base font-medium text-white shadow-xl shadow-[#3f8e0059] transition-transform duration-200 ease-in-out hover:scale-[1.02]">Know more</button>
    </div>
  )
}