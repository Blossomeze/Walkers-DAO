import logo from '../assets/logo.png';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Header() {
    const handleButtonClick = () => {
        console.log('Button clicked');
      };
  return (
    <div className='header flex items-center justify-between px-[9%] h-20 fixed'>
        <div>
            <img className='w-[130px]' src={logo} alt='walkers logo' />
        </div>
        <div className='text-primary hidden lg:flex text-base font-medium'>
            <nav className='hlinks'>
                <a href='#'>Home</a> 
                <a href='#'>About Us</a>
                <a href='#'>What we do</a>
                <a href='#'>FAQs</a>
            </nav>
        </div>
        <div>
            <div className='hidden lg:flex'>
                <button className="bg-[#000] text-[#fff] flex p-3 rounded-md" onClick={handleButtonClick}>
                    <span className='pr-1'>Launch DAO</span>
                    <RocketLaunchIcon />
                </button>
            </div>  
            <div className='flex lg:hidden text-3xl'>
                <DehazeIcon />
            </div>
        </div>
    </div>
  )
}

export default Header