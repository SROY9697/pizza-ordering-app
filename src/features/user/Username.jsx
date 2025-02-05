
import { useSelector } from "react-redux";

export default function Username() {

  //we use useSelector hook to get the state values from slice
  const username = useSelector(state=>state.user.username);
  if(!username){
    return null;
  }

  return <div className="text-sm font-semibold hidden md:block">{username}</div>;
}
