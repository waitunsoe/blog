import React, { useState } from "react";

function HumanFileSize(size) {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    " " +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
}

function FileUploader() {
  const [files, setFiles] = useState([]);
  const [fileDragging, setFileDragging] = useState(null);
  const [fileDropping, setFileDropping] = useState(null);

  const removeFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleDrop = (e) => {
    let removed, add;
    const updatedFiles = [...files];

    removed = updatedFiles.splice(fileDragging, 1);
    updatedFiles.splice(fileDropping, 0, ...removed);

    setFiles(updatedFiles);

    setFileDropping(null);
    setFileDragging(null);
  };

  const handleDragEnter = (e) => {
    const targetElem = e.target.closest("[draggable]");
    setFileDropping(targetElem.getAttribute("data-index"));
  };

  const handleDragStart = (e) => {
    setFileDragging(e.target.closest("[draggable]").getAttribute("data-index"));
    e.dataTransfer.effectAllowed = "move";
  };

  const loadFile = (file) => {
    const blobUrl = URL.createObjectURL(file);
    return blobUrl;
  };

  const addFiles = (e) => {
    const newFiles = [...e.target.files];
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
  };

  return (
    <div className="bg-gray-800 rounded mx-auto">
      <div className="relative flex flex-col p-4 text-gray-400 border border-gray-700 rounded">
        <div
          className="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer"
          onDragOver={(e) => {
            e.preventDefault();
            e.target.classList.add(
              "border-blue-400",
              "ring-4",
              "ring-inset",
              "bg-red-500"
            );
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.target.classList.remove(
              "border-blue-400",
              "ring-4",
              "ring-inset"
            );
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.target.classList.remove(
              "border-blue-400",
              "ring-4",
              "ring-inset"
            );
          }}
        >
          <input
            name="photos[]"
            accept="*"
            type="file"
            multiple
            className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
            onChange={addFiles}
            onDragOver={(e) => {
              e.preventDefault();
              e.target
                .closest("[draggable]")
                .classList.add("border-blue-400", "ring-4", "ring-inset");
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              e.target
                .closest("[draggable]")
                .classList.remove("border-blue-400", "ring-4", "ring-inset");
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.target
                .closest("[draggable]")
                .classList.remove("border-blue-400", "ring-4", "ring-inset");
            }}
          />
          <div className="flex flex-col items-center justify-center p-5 text-center">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="m-0">Drag your files here or click in this area.</p>
          </div>
        </div>

        {files.length > 0 && (
          <div
            className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-6"
            onDrop={(e) => {
              e.preventDefault();
              handleDrop(e);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = "move";
            }}
          >
            {files.map((file, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border rounded cursor-move select-none ${
                  fileDragging === index ? "border-blue-600" : ""
                }`}
                style={{ paddingTop: "100%" }}
                onDragStart={handleDragStart}
                onDragEnd={() => setFileDragging(null)}
                draggable="true"
                data-index={index}
              >
                <button
                  className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                  type="button"
                  onClick={() => removeFile(index)}
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
                {file.type.includes("audio/") ? (
                  <svg
                    className="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    ></path>
                  </svg>
                ) : file.type.includes("application/") || file.type === "" ? (
                  <svg
                    className="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                ) : file.type.includes("image/") ? (
                  <img
                    className="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white preview"
                    src={loadFile(file)}
                    alt={file.name}
                  />
                ) : file.type.includes("video/") ? (
                  <video className="absolute inset-0 object-cover w-full h-full border-4 border-white pointer-events-none preview">
                    <source src={loadFile(file)} type="video/mp4" />
                  </video>
                ) : null}

                <div className="absolute bottom-0 left-0 right-0 flex flex-col text-xs bg-white bg-opacity-50">
                  <span className="w-full font-bold text-gray-900 truncate">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-900">
                    {HumanFileSize(file.size)}
                  </span>
                </div>

                <div
                  className={`absolute inset-0 z-40 transition-colors duration-300 ${
                    fileDropping === index && fileDragging !== index
                      ? "bg-blue-200 bg-opacity-80"
                      : ""
                  }`}
                  onDragEnter={handleDragEnter}
                  onDragLeave={() => setFileDropping(null)}
                ></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUploader;
