import errorIcon from "../assets/close-circle-outline-red.svg"

export default function Error({ title, message, onConfirm}) {
    return (
        <dialog className="error-modal">
            <img src={errorIcon} alt="Error icon" />
            <div>
                <h2>{title}</h2>
                <p>{message}</p>
            </div>
                <button onClick={onConfirm}>OK</button>
        </dialog>
    );
}