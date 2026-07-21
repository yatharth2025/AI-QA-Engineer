function ChartCard() {

    return (

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold">

                Website Metrics

            </h2>

            <div className="mt-8 h-64 flex items-end gap-6">

                <div className="bg-blue-500 w-16 h-48 rounded"></div>

                <div className="bg-green-500 w-16 h-40 rounded"></div>

                <div className="bg-orange-500 w-16 h-52 rounded"></div>

                <div className="bg-purple-500 w-16 h-36 rounded"></div>

            </div>

        </div>

    );

}

export default ChartCard;