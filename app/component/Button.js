
export default function Button({ children, handler }) {
    return (
        <button
            className="flex items-center justify-center  text-[16px] w-[80px] text-center rounded-2xl bg-blue-500 p-3 cursor-pointer"
            onClick={handler}
        >
            {children}
        </button>
    )
}