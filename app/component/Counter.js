import Button from "./Button";
import Count from "./Count";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function Counter({ id, count, increment, decrement }) {
    return (
        <div className="flex items-center w-full m-auto h-[45px] justify-between border border-[#1d2532] rounded-2xl">
            <Button handler={() => increment(id)}><FaMinus /></Button>
            <Count count={count} />
            <Button handler={() => decrement(id)}><FaPlus /></Button>
        </div>
    );
}
