function ResultCard({ title, value, color = "text-blue-600" }) {

    return (

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300">

            <p className="text-sm text-gray-500 uppercase tracking-wide">

                {title}

            </p>

            <h2 className={`text-4xl font-bold mt-3 ${color}`}>

                {value}

            </h2>

        </div>

    );

}

export default ResultCard;