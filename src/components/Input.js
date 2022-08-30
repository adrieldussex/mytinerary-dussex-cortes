import '../styles/Input.css'

export default function Input(props) {
    let inputLabel = props.label
    let inputFor = props.for
    let inputType = props.type

    return (
    <div className='Input-wrapper'>
        <label for={inputFor}>{inputLabel}</label>
        <input className="Input-input" type={inputType} id={inputFor} name={inputFor}></input>
    </div>
  )
}
