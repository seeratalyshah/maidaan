"use client";
import { useState } from "react";

const upcommingTrialsData = [];

const pastTrialsData = [
  {
    id: 1,
    location: "Gujranwala",
    date: "13-Dec-24",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 2,
    location: "Gujrat",
    date: "14-Dec-24",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 3,
    location: "Sialkot",
    date: "15-Dec-24",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 4,
    location: "Lahore",
    date: "20-Dec-24",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 5,
    location: "Harappa, Sahiwal",
    date: "21-Dec-24",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 6,
    location: "Pir Mahal",
    date: "22-Dec-24",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 7,
    location: "Toba Tek Singh",
    date: "27-Dec-24",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 8,
    location: "Tandlianwala",
    date: "28-Dec-24",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 9,
    location: "Samundri, Faisalabad",
    date: "29-Dec-24",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 10,
    location: "Peshawar",
    date: "3-Jan-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 11,
    location: "Kohat",
    date: "4-Jan-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 12,
    location: "Dera Ismail Khan",
    date: "5-Jan-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 13,
    location: "Abbotabad",
    date: "10-Jan-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 14,
    location: "Chakdara",
    date: "11-Jan-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 15,
    location: "Islamabad",
    date: "12-Jan-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 16,
    location: "Muzaffarabad",
    date: "24-Jan-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 17,
    location: "Rawalakot",
    date: "25-Jan-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 18,
    location: "Kotli",
    date: "26-Jan-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 19,
    location: "Quetta",
    date: "1,2-Feb-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 20,
    location: "Malir, Karachi",
    date: "3-Feb-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 21,
    location: "Lyari, Karachi",
    date: "4-Feb-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 22,
    location: "Swat",
    date: "7-Feb-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 23,
    location: "Mirpur",
    date: "9-Feb-25",
    category: "Under 16/17",
    status: "Closed",
  },
  {
    id: 24,
    location: "Wazirabad",
    date: "12-Feb-25",
    category: "Under 16/17",
    status: "Closed",
  },
];

export default function NationwideTrials() {
  const [trialsData, setTrialsData] = useState(pastTrialsData);
  const [filter, setFilter] = useState("Closed");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  const upcommingClick = () => {
    setTrialsData(upcommingTrialsData);
    setFilter("Upcoming");
    setCurrentPage(1);
  };

  const closedClick = () => {
    setTrialsData(pastTrialsData);
    setFilter("Closed");
    setCurrentPage(1);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = trialsData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(trialsData.length / rowsPerPage);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            filter === "Upcoming" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
          onClick={upcommingClick}
        >
          Upcoming Trials
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "Closed" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
          onClick={closedClick}
        >
          Past Trials
        </button>
      </div>
      {trialsData.length > 0 ? (
        <>
          {/* Scrollable container for table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Location</th>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Category</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((trial) => (
                  <tr key={trial.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">
                      {trial.location}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">
                      {trial.date}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm whitespace-nowrap">
                      {trial.category}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      {trial.status === "Upcoming" ? (
                        <a
                          href={trial.link}
                          className="text-green-600 hover:underline"
                        >
                          Register
                        </a>
                      ) : (
                        <span className="text-gray-500">Closed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center mt-4 gap-2">
            <button
              className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Prev
            </button>
            <span className="px-3 py-1">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500">
          No {filter.toLowerCase()} trials available.
        </p>
      )}
    </div>
  );
}
