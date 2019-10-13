import React, { useState } from "react";
import axios from "axios";


export default function Upload() {
    const [selectedFile, setselectedFile] = useState(null)
    const [loaded, setLoaded] = useState(0)

    const onChangeHandler = (e) => {
        let files = e.target.files;
        if (maxSelectFile(e) && checkMimeType(e) && checkFileSize(e)) {
        setselectedFile(files)
        setLoaded(0)
      }
    }

    const onClickHandler = async () => {
      const data = new FormData();
      const config = { headers: { 'content-type': 'multipart/form-data' }}
      for (let x = 0; x < selectedFile.length; x++) {
        data.append("file", selectedFile[x]);
        console.log(selectedFile[x], 'udah masuk');
    }
        
    try {
        let result = await axios.post("http://localhost:4000/upload", data, config)
        if (result) {
            console.log('sucess');     
        } 
        
    } catch (error) {
        console.log(error);
        console.log("upload fail");   
    }
        
    }

    const checkMimeType = (e) => {
        //getting file object
        let files = e.target.files;
        //define message container
        let err = [];
        // list allow mime type
        const types = ["image/png", "image/jpeg", "image/gif"];
        // loop access array
        for (let x = 0; x < files.length; x++) {
        // compare file type find doesn't matach
        if (types.every(type => files[x].type !== type)) {
            // create error message and assign to container
            err[x] = files[x].type + " is not a supported format\n";
         }
        }
        for (let z = 0; z < err.length; z++) {
        // if message not same old that mean has error
        // discard selected file
        console.log(err);
        e.target.value = null;
        }
        return true;
    }

    const maxSelectFile = (e) => {
        let files = e.target.files;
        if (files.length > 3) {
          const msg = "Only 3 images can be uploaded at a time";
          e.target.value = null;
          console.log(msg);
          return false;
        }
        return true;
    }

    const checkFileSize = (e) => {
        let files = e.target.files;
        let size = 2000000;
        let err = [];
        for (var x = 0; x < files.length; x++) {
          if (files[x].size > size) {
            err[x] = files[x].type + "is too large, please pick a smaller file\n";
          }
        }
        for (var z = 0; z < err.length; z++) {
          console.log(err[z]);
          e.target.value = null;
        }
        return true;
    }

    return (
        <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <div className="form-group files">
              <label>Upload Your File </label>
              <input
                type="file"
                className="form-control"
                multiple
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="form-group"></div>

            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={(e) => onClickHandler(e)}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    )
}
