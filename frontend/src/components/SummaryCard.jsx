function SummaryCard({ summary }) {

    return (

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mt-8">

            <h2 className="text-2xl font-bold text-gray-800">

                🤖 AI Summary

            </h2>

            <div className="w-20 h-1 bg-blue-600 rounded mt-3 mb-5"></div>

            <p className="text-gray-600 leading-8 whitespace-pre-line">

                {summary}

            </p>

        </div>

    );

}

export default SummaryCard;