
export default function Button({ children, handler }) {
    return (
        <button
            className="text-[16px] rounded-2xl bg-blue-500 p-3 w-[150px] m-2 cursor-pointer"
            onClick={handler}
        >
            {children}
        </button>
    )
}