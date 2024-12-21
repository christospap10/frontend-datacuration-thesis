"use client";
import { useState } from "react";
import { MessageCircleWarning } from "lucide-react";
import Link from "next/link";

const PersonPage = () => {
  const [personId, setPersonId] = useState("");
  const [response, setResponse] = useState("");
  const [batchResponse, setBatchResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [batchLoading, setBatchLoading] = useState(false);
  const [batchStopped, setBatchStopped] = useState(false);

  const updatePerson = async () => {
    if (!personId) {
      setResponse(
        '<p class="text-red-500">Please enter a valid Person ID.</p>'
      );
      return;
    }

    setLoading(true);
    setResponse('<div class="loader mx-auto mt-4"></div>');

    try {
      const res = await fetch(
        `http://localhost:8010/proxy/api/datacuration/v1/person/update?id=${personId}`,
        {
          method: "PUT",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setResponse(
          `<p class="text-red-500">Error: ${
            data.error || "Could not update the person."
          }</p>`
        );
        return;
      }

      setResponse(
        `<p class="text-green-500">Person updated successfully:</p><pre>${JSON.stringify(
          data,
          null,
          2
        )}</pre>`
      );
    } catch (error) {
      setResponse(`<p class="text-red-500">Error: ${error.message}</p>`);
    } finally {
      setLoading(false);
    }
  };

  const batchUpdatePersons = async () => {
    if (batchStopped) {
      // Reset the stopped state if starting a new batch
      setBatchStopped(false);
    }

    setBatchLoading(true);
    setBatchResponse('<div class="loader mx-auto mt-4"></div>');

    try {
      const res = await fetch(
        `http://localhost:8010/proxy/api/datacuration/v1/persons/clean`,
        {
          method: "GET",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setBatchResponse(
          `<p class="text-red-500">Error: ${
            data.error || "Could not batch update the persons."
          }</p>`
        );
        return;
      }

      // Check if the batch process was stopped
      if (batchStopped) {
        setBatchResponse(
          '<p class="text-yellow-500">Batch process was stopped by the user.</p>'
        );
        return;
      }

      setBatchResponse(
        `<p class="text-green-500">Batch update successful:</p><pre>${JSON.stringify(
          data,
          null,
          2
        )}</pre>`
      );
    } catch (error) {
      setBatchResponse(`<p class="text-red-500">Error: ${error.message}</p>`);
    } finally {
      setBatchLoading(false);
    }
  };

  const stopBatchProcess = () => {
    setBatchStopped(true);
    setBatchLoading(false);
    setBatchResponse(
      '<p class="text-yellow-500">Batch process was stopped by the user.</p>'
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card w-full py-4 px-6 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Data Curator</h1>
        <Link
          href="/"
          className="text-primary font-bold text-lg hover:text-primary/80 transition-colors"
        >
          Home
        </Link>
      </header>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-start mt-8 w-full px-4 md:px-0">
        {/* Curate Person */}
        <div className="bg-card p-6 m-4 rounded-lg shadow-md w-full md:w-1/2">
          <h1 className="text-xl font-semibold mb-4">Curate Person</h1>
          <label htmlFor="personId" className="block mb-2 font-medium">
            Enter Person ID:
          </label>
          <input
            type="text"
            id="personId"
            placeholder="Person ID"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
            className="w-full px-3 py-2 mb-4 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-input"
          />
          <button
            onClick={updatePerson}
            disabled={loading}
            className="w-full py-2 px-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <div className="loader mx-auto"></div>
            ) : (
              "Start Curate Person"
            )}
          </button>
          <div
            className="response mt-4"
            dangerouslySetInnerHTML={{ __html: response }}
          ></div>
        </div>

        {/* Batch Curate Persons */}
        <div className="bg-card p-6 m-4 rounded-lg shadow-md w-full md:w-1/2">
          <h1 className="text-xl font-semibold mb-4">Batch Curate Persons</h1>
          <div className="p-5 flex items-center">
            <MessageCircleWarning className="w-6 h-6 mr-2" />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The batch process is resource-intensive and should be used with
              caution.
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={batchUpdatePersons}
              disabled={batchLoading}
              className="flex-1 py-2 px-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {batchLoading ? (
                <div className="loader mx-auto"></div>
              ) : (
                "Start Batch"
              )}
            </button>
            <button
              onClick={stopBatchProcess}
              disabled={!batchLoading}
              className="flex-1 py-2 px-4 bg-destructive text-destructive-foreground font-semibold rounded-md hover:bg-destructive/90 transition-colors disabled:opacity-50"
            >
              Stop Batch
            </button>
          </div>
          <div
            className="response mt-4"
            dangerouslySetInnerHTML={{ __html: batchResponse }}
          ></div>
        </div>
      </div>

      {/* Loader Styles */}
      <style jsx>{`
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid hsl(var(--primary));
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default PersonPage;