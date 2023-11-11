import { Outlet } from "react-router-dom";
const Navgation = () => {
  return (
    <div>
      <div>
        <p>I am a navgation bar</p>
      </div>
      <Outlet />
    </div>
  );
};
export default Navgation;
