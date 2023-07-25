import React from "react";
import { useState, useEffect } from "react";
import { storage } from "./Firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";
const App = () => {
  const [image, setImage] = useState(null);
  const [imageurl, setImageUrl] = useState([]);
  const imagelistref = ref(storage, "images/");
  const uploadFile = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl((prev) => [...prev, url]);
        console.log("image uploaded successfully", imageurl);
      });
    });
  };
  useEffect(() => {
    listAll(imagelistref).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrl((prev) => [...prev, url]);
          // setImageUrl((prev) => {
          //   [...prev, url];
          // });
        });
      });
    });
  }, []);
  return (
    <>
      <div className="App">
        <input
          type="file"
          name=""
          id=""
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
        />
        <button onClick={uploadFile}>Upload The Image</button>

        {imageurl.map((url) => {
          return <img src={url} />;
        })}
      </div>
    </>
  );
};

export default App;
