import partners from '../assets/Frame 113.png'

function Partners() {
  return (
    <div className='bg-[#070707] flex flex-col items-center py-[3%]' >
        <h1 className='text-[#fff] text-2xl lg:text-4xl'>Our Partners</h1>
        <div className='py-5 mx-5'>
          <img src={partners} alt="partner logo" />
        </div>
    </div>
  )
}

export default Partners