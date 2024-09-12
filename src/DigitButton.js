import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit, ...props}) {
    return (
        <button
            {...props}
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }})}
        >
            {digit}
        </button>
    )
}