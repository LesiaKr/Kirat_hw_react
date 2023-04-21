import { Outlet } from "react-router-dom";

const Goods = () => {
    return (
      <div className="Menu-block"
          style={{backgroundColor:"pink"}}>
        Goods page 
        <h2>About our goods</h2> 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quis mollitia optio odio placeat ex quod! Temporibus itaque libero doloribus fugit ipsa ad ipsum sequi architecto recusandae officiis repellat, quia blanditiis eligendi eum voluptates repudiandae numquam nisi hic aliquid saepe eaque? </p>
        <Outlet />
      </div>
    )
}
export default Goods;