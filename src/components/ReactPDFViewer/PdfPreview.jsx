import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';

// Essential styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfPreview = () => {
    return (
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '750px' }}>
            <Worker workerUrl="/pdf.worker.min.js">
                <Viewer fileUrl="https://res.cloudinary.com/dycqdhycj/image/upload/v1776678040/chat-app/messages/wwmrbw0kjl8qj7neblxo.pdf" />
            </Worker>
        </div>
    );
};

export default PdfPreview;
