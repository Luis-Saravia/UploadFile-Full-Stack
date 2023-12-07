import { useState } from "react";
import axios from 'axios'
import "./App.css";

function App() {
  const [post, setPost] = useState({
    title: "",
    photo: null,
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const formData = new FormData()

  //   formData.append('title', post.title)
  //   formData.append('photo', post.photo)

  //   const response = await axios.post('http://localhost:3000/upload', formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     }
  //   });

  //   console.log(response)
  // }

  const handleSubmitGet = async (e) => {
    e.preventDefault()

    const response = await axios.get('http://localhost:3000/get');
    console.log(response)
  }


  return (
    <div>
      <form action="" onSubmit={handleSubmitGet}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <input
          type="file"
          name="photo"
          onChange={(e) => setPost({ ...post, photo: e.target.files[0] })}
        />
        <button>Subir</button>
      </form>
    </div>
  );
}

export default App;
