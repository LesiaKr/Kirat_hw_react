
function ConvertToTenth(props) {
    if (!props.number) {
      return 0;
    }
    return <b>{props.number * 0.5}</b> ;
}
export default ConvertToTenth;