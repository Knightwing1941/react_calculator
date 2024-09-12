import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation, ...props }) {
    return (
        <button
            {...props}
            onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
        >
            {operation}
        </button>
    )
}