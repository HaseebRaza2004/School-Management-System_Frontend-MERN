import axios from "axios";
import { useEffect, useState } from "react";
import { ApiRoutes, BASE_URL } from "../Constant/Constant";

function AdminPage() {

    const [request, setRequest] = useState([]);

    // get all request from db.
    useEffect(() => {
        axios.get(ApiRoutes.getAllRequests)
            .then((res) => {
                setRequest(res.data);
            })
            .catch((err) => {
                console.log("Get All Request error =>", err);
            });
    }, []);

    // approved or reject user request to become a teacher from db. 
    const handleRequestStatus = async (requestId, status) => {
        try {
            const response = await axios.patch(`${BASE_URL}request/routes/Requests/${requestId}`, { status }); // Update API endpoint
            // Update the local state with the updated request
            setRequest((prevRequests) =>
                prevRequests.map((request) =>
                    request._id === requestId ? { ...request, status } : request
                )
            );
        } catch (error) {
            console.error('Error updating request status:', error);
        }
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">

                    {
                        request.map((data) => {
                            console.log("request user info =>", data);
                            return (
                                <div key={data._id} className="sm:w-1/2 mb-10 px-4">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img
                                            alt="content"
                                            className="object-cover object-center h-full w-full"
                                            src={data?.userId?.profilePhoto}
                                        />
                                    </div>
                                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                                        {data?.userId?.name}
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                        {data?.education}
                                    </p>
                                    <p className="leading-relaxed text-base">
                                        {data?.skills}
                                    </p>
                                    <p className="leading-relaxed text-base">
                                        {data?.specialistSubject}
                                    </p>
                                    <p className="leading-relaxed text-base">
                                        {data?.userId?.email}
                                    </p>
                                    <p className="leading-relaxed text-base">
                                        {data?.status}
                                    </p>
                                    <div className="flex flex-row">
                                        <button
                                            className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
                                            onClick={() => handleRequestStatus(data._id, 'approved')}
                                            disabled={data?.status !== 'pending'}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
                                            onClick={() => handleRequestStatus(data._id, 'rejected')}
                                            disabled={data?.status !== 'pending'}
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
};

export default AdminPage;