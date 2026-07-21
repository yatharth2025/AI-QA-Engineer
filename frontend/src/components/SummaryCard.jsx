function SummaryCard({ summary }) {

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold">

        AI Summary

      </h2>

      <p className="mt-4 text-gray-600 leading-8">

        {summary}

      </p>

    </div>

  );

}

export default SummaryCard;