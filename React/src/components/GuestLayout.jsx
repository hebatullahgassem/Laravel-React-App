import {Navigate, Outlet} from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider';

export default function GuestLayout (){
  const {token} = useStateContext();

  //if user is authenticated 
  if(token){
    return <Navigate to="/" />
  }

  return(
    <div>
      <Outlet/> 
    </div>
  );
}