import React, { useState } from 'react'
import { FileUpload } from 'react-ipfs-uploader'

function FileUploadTest() {
    const [fileUrl, setFileUrl] = useState('')
    return (
        <div className="">
            <FileUpload setUrl={setFileUrl} />
            FileUrl : <a
                href={fileUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {fileUrl}
            </a>
        </div>
    );
}
export default FileUploadTest;