import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ads.module.css';
import Image from 'next/image';

const AdsPage = () => {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    // Do something with the selected file
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    setUploadedFile(file);
    // Do something with the dropped file
  };

  const handleViewFile = () => {
    // Implement logic to view the uploaded file
    console.log("View file:", uploadedFile);
  };

  return (
    <div className="content">
      <nav className="vertical-navbar">
  <ul>
    <li>
      <div className="healthkare-header">
        <h2>CodeOholics</h2>
        <hr />
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/dashboard.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/home')}>Dashboard</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/hospital.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/hospitals')}>Results</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/Doctor.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/request')}>Leads</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/p1.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/patient')}>Team</a>
      </div>
    </li>
    <li>
      <div className="nav-item1">
        <Image src="/images/adin.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/ads')}>About Us</a>
      </div>
    </li>
  </ul>
</nav>
      <div className="dashboard-data">
      <div className="head-data">
          <h1>About us </h1>
           <p>we are codeOholics</p>
          </div>
        <div
          className={`${styles.dragDropBlock} ${isDragging ? styles.dragging : ''}`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <img src="images/cloud-icon.png" alt="Cloud Icon" className={styles.cloudIcon} />
          <p>Drag & Drop files here</p>
          <label htmlFor="fileInput" className={styles.fileButton}>Browse Files</label>
          <input
            type="file"
            id="fileInput"
            className={styles.fileInput}
            onChange={handleFileChange}
            hidden
          />
          <p className={styles.fileType}>File should be jpeg, png, or pdf</p>
          <p className={styles.maxSize}>Max size 50 MB</p>
        </div>
        {uploadedFile && (
          <div className={styles.uploadedFileSection}>
            <p>Uploaded File: {uploadedFile.name}</p>
            <button onClick={handleViewFile}>View</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdsPage;
