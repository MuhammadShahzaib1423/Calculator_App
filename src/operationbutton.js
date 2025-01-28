import { actions } from "./App";

export default function OperationButton({ operation, dispatch }) {
    return (
        <button
        onClick={() => dispatch({ type: actions.Add_Operation, payload: { operation } })}
        >
        {operation}
        </button>
    );
    }