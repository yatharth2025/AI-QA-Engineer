import { useState } from "react";

import api from "../services/api";

import ResultCard from "../components/ResultCard";
import SummaryCard from "../components/SummaryCard";
import ChartCard from "../components/ChartCard";

function Dashboard() {

    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleScan = async () => {

        if (!url.trim()) {
            alert("Please enter a website URL");
            return;
        }

        try {

            setLoading(true);

            const response = await api.post("/api/scan", {
                url,
            });

            setResult(response.data);

        } catch (error) {

            console.error(error);
            alert("Failed to scan website.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-4xl font-bold text-gray-800">
                AI QA Engineer
            </h1>

            <p className="text-gray-500 mt-2">
                Scan any website using AI + Playwright
            </p>

            {/* URL Input */}

            <div className="flex gap-4 mt-8">

                <input
                    type="text"
                    placeholder="https://example.com"
                    className="flex-1 border rounded-lg bg-white p-3"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <button
                    onClick={handleScan}
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-lg disabled:bg-gray-400"
                >
                    {loading ? "Scanning..." : "Scan"}
                </button>

            </div>

            {result && (

                <>

                    {/* Scan Result */}

                    <div className="mt-10">

                        <h2 className="text-3xl font-bold text-gray-800">
                            Scan Result
                        </h2>

                        <p className="text-gray-500 mt-2">
                            {result.url}
                        </p>

                    </div>

                    {/* Score Cards */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

                        <ResultCard
                            title="Website Score"
                            value={result.score ?? "N/A"}
                            color="text-blue-600"
                        />

                        <ResultCard
                            title="Performance"
                            value={
                                result.performance?.score ??
                                result.performance?.status ??
                                "N/A"
                            }
                            color="text-green-600"
                        />

                        <ResultCard
                            title="SEO"
                            value={
                                result.seo?.score ??
                                result.seoScore ??
                                "N/A"
                            }
                            color="text-orange-600"
                        />

                        <ResultCard
                            title="Accessibility"
                            value={
                                result.accessibility?.score ??
                                "N/A"
                            }
                            color="text-purple-600"
                        />

                    </div>

                    {/* Analytics Chart */}

                    <ChartCard result={result} />

                    {/* AI Summary */}

                    <SummaryCard
                        summary={
                            result.aiReport?.summary ??
                            "No AI Summary Available."
                        }
                    />

                </>

            )}

        </div>

    );

}

export default Dashboard;