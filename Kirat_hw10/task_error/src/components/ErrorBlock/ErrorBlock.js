import { useNavigate } from "react-router-dom";

const ErrorBlock = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/main')
    }    
    return (
      <div 
        className="Menu-block Error" 
        style={{backgroundColor:"black"}}>
        <h1>Something went wrong...</h1>
        <img src="https://cdn1.iconfinder.com/data/icons/DarkGlass_Reworked/128x128/actions/fileclose.png" alt="Red Mark" />
        <p>
          <button onClick={handleClick}>
            Go to Main
          </button>
        </p>
      </div>
    )
}
export default ErrorBlock;