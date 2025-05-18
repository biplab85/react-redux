import Button from "./Button";
import Count from "./Count";

export default function Counter({ id, count, increment, decrement }) {
    return (
        <div>
            <div className="bg-white border-2 shadow w-1/2 p-10 m-auto">
                <h3 className="text-center text-3xl text-[#565656]">
                    Simple counter application
                </h3>
                <Count count={count} />
                <div className="flex items-center justify-center">
                    <Button handler={() => increment(id)}>increment</Button>
                    <Button handler={() => decrement(id)}>decrement</Button>
                </div>
            </div>
        </div>
    );
}
