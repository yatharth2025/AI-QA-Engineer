import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

function ChartCard({ result }) {

    const data = [

        {
            name: "Performance",
            score: result?.performance?.score ?? 0,
        },

        {
            name: "SEO",
            score: result?.seo?.score ?? result?.seoScore ?? 0,
        },

        {
            name: "Accessibility",
            score: result?.accessibility?.score ?? 0,
        },

        {
            name: "Overall",
            score: result?.score ?? 0,
        },

    ];

    return (

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mt-8">

            <h2 className="text-2xl font-bold text-gray-800">

                📊 Website Analytics

            </h2>

            <p className="text-gray-500 mt-2">

                Visual representation of website scores

            </p>

            <div className="mt-8" style={{ width: "100%", height: 350 }}>

                <ResponsiveContainer>

                    <BarChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />

                        <YAxis domain={[0, 100]} />

                        <Tooltip />

                        <Bar dataKey="score" radius={[8, 8, 0, 0]} />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default ChartCard;