
function Person({image, name, role}) {
  return (
    <div className='flex flex-col max-w-[32%] lg:max-w-[22.5%] pt-[3%]'>
        <img className="rounded-t-lg" src={image} alt="team member" />
        <h3 className='text-[#fff] pt-2 text-xs lg:text-xl'>{name}</h3>
        <h4 className='text-[#fff] text-left text-xs lg:text-lg'>{role}</h4>
    </div>
  )
}

export default Person