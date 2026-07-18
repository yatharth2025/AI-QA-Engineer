import { useState } from "react";
import api from "../services/api";

function Dashboard() {

    const [url, setUrl] = useState("");

    const [result, setResult] = useState(null);

    const handleScan = async () => {

        try {

            const response = await api.post("/api/scan", {

                url,

            });

            setResult(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold">

                AI QA Engineer

            </h1>

            <div className="mt-8 flex gap-4">

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

                    Scan

                </button>

            </div>

            {result && (

                <pre className="bg-black text-green-400 mt-8 p-5 rounded-lg overflow-auto">

                    {JSON.stringify(result, null, 2)}

                </pre>

            )}

        </div>

    );

}

export default Dashboard;