
function ConvertToHundreds(props) {
    if (!props.number) {
        return 0;
    }
    return <b>{props.number * 0.05}</b> ;
}
export default ConvertToHundreds;