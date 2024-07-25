import { Link } from 'react-router-dom';
import {LOGO_IMG} from '../utils/constant';
import {CART_IMG} from '../utils/constant';
import LoginBtn from './LoginBtn';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = ()=>{
    const isOnline = useOnlineStatus();
    const {loggedinUser}= useContext(UserContext);

    const cartItems = useSelector((store)=> store.cart.items);

    return(
      <div className='flex justify-between px-5 shadow-md bg-gradient-to-tr from-blue-500 to-blue-100'>
        <div >
          <img className=' w-[100px] h-[100px]' src={LOGO_IMG} alt='logoImg'></img>
        </div>
        <div className='flex gap-5 justify-center items-center text-[17px]'>
          <div>Online Status: {(isOnline ? "✅" : "🔴") }</div>
          <Link to="/" className='h-[40px] border-[2px] 
           bg-slate-300 rounded-md border-black p-2'>Home</Link>
          <Link to="/about" className='h-[40px] border-[2px]
           bg-slate-300 rounded-md border-black p-2'>About Us</Link>
          <Link to="/contact" className='h-[40px] border-[2px]
            bg-slate-300 rounded-md border-black p-2'>Contact Us</Link>
          <Link to='/cart'>
            <div >
              <img className='w-[60px] h-[40px]' src={CART_IMG} alt='cartImg'></img>
              <span className='font-bold'>({cartItems.length}-Items)</span>
            </div>
          </Link>  
          <LoginBtn/>
          <div className='font-bold'> {loggedinUser} </div>
        </div>
      </div>
    )
}
export default Header;