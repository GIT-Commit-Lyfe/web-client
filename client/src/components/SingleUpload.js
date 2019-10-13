import React, { useState } from "react";
import axios from "axios";
import '../styles/single-upload.scss'

export default function SingleUpload({ id }) {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    });
  };

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    console.log(image);

    try {
      let res = await axios.post(
        "http://localhost:4000/upload",
        formData,
        config
      );
      console.log(res, "apa");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div align="center" style={{ marginTop: "10%" }}>
    <label htmlFor="upload-button">
      {
        image.preview ? <img src={ image.preview } width="300" height="300" alt="preview" /> : (
          <>
            <h5 className="text-center"> Upload your photo</h5>
          </>
        )
      }
    </label>
    <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleChange}/>
    <br />
    <button onClick={handleUpload}>Upload</button>
  </div>
  );
}
