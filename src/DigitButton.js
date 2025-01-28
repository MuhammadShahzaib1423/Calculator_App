import { actions } from "./App"


export default function DigitButton({digit, dispatch}) {
    return (
      <button onClick={() => dispatch({type: actions.Add_Digit , payload: {digit}})}>{digit}</button>
      );
}