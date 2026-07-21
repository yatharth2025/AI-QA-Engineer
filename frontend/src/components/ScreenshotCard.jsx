function ScreenshotCard({ screenshot }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold">

                Screenshot

            </h2>

            {

                screenshot

                ?

                <img

                    src={screenshot}

                    alt="Website"

                    className="rounded-lg mt-6"

                />

                :

                <p className="text-gray-500 mt-6">

                    No Screenshot Available

                </p>

            }

        </div>

    );

}

export default ScreenshotCard;