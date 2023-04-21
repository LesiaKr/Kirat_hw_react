import { useState } from "react";
import { useParams } from "react-router-dom";

const GoodsItem = () => {

    const {goodsId} = useParams();   
    const [error, setError] = useState(false);

    const handleError = () => {
      setError(true);
    }

    if(error) {
      return new Error('Error!!!');
    }
    return (
      <div style={{backgroundColor:"orange", padding: "20px"}}>
        <p>{goodsId}</p>
        <p>
          <button onClick={handleError}>
            Х Помилка Х
        </button>
        </p>
      </div>
    )
}
export default GoodsItem;