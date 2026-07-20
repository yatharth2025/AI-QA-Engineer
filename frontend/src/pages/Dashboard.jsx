import { useState } from "react";

import api from "../services/api";

function Dashboard() {

    const [url, setUrl] = useState("");

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const handleScan = async () => {

        if (!url) {

            alert("Enter URL");

            return;

        }

        try {

            setLoading(true);

            const response = await api.post("/api/scan", {

                url,

            });

            setResult(response.data);

        }

        catch (error) {

            console.log(error);

            alert("Scan Failed");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold">

                AI QA Engineer

            </h1>

            <p className="text-gray-500 mt-2">

                Scan any website using AI.

            </p>

            <div className="flex gap-4 mt-8">

                <input

                    className="border p-3 rounded-lg w-96"

                    placeholder="https://example.com"

                    value={url}

                    onChange={(e) => setUrl(e.target.value)}

                />

                <button

                    onClick={handleScan}

                    className="bg-blue-600 text-white px-6 rounded-lg"

                >

                    {

                        loading

                        ?

                        "Scanning..."

                        :

                        "Scan"

                    }

                </button>

            </div>

            {

                result && (

                    <div className="mt-10">

                        <h2 className="text-2xl font-bold">

                            Scan Result

                        </h2>

                        <pre className="bg-black text-green-400 p-5 rounded-lg mt-4 overflow-auto">

                            {JSON.stringify(result, null, 2)}

                        </pre>

                    </div>

                )

            }

        </div>

    );

}

export default Dashboard;