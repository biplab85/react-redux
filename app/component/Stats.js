export default function Stats({ count }) {
    return (
        <div>

            <div className="w-[350px] rounded-xl ml-15 p-10 bg-[#0f172a] border border-[#1d2532]">
                <h3 className='mb-8 text-center text-3xl text-[#7287a5]'>Addition of all count </h3>
                <div className="text-center text-3xl text-[#7287a5]">
                    Total Number:: <span className="text-[#FFF]">{count}</span>
                </div>
            </div>
        </div>
    )
}
























