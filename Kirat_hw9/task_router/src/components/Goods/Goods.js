import { Outlet } from "react-router-dom";

const Goods = () => {
    return (
      <div style={{backgroundColor:"pink", padding: "100px"}}>
        Goods page 
        <Outlet />
      </div>
    )
}
export default Goods;