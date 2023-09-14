import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileList = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    // Make a GET request to your server to retrieve the list of files from Dropbox
    axios.get('https://dropbox-uf26.onrender.com/upload')
      .then((response) => {
        setFileList(response.data.files);
      })
      .catch((error) => {
        console.error('Error fetching file list:', error);
      });
  }, []);

  const handleDownload = async (fileName) => {
    try {
      const response = await axios.get(`http://localhost:3001/download/${fileName}`, {
        responseType: 'blob', // Specify the response type as a binary blob
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <h2>File List</h2>
      <ul>
        {fileList.map((file, index) => (
          <li key={index}>
            {file.name}
            <button onClick={() => handleDownload(file.name)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;