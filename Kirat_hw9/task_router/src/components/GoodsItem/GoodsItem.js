import { useNavigate, useParams } from "react-router-dom";

const GoodsItem = () => {

    const {goodsId} = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/contacts')
    }    
    return (
      <div style={{backgroundColor:"orange", padding: "20px"}}>
        <p>{goodsId}</p>
        <p>
          <button onClick={handleClick}>
            Go to Contacts
          </button>
        </p>
      </div>
    )
}
export default GoodsItem;