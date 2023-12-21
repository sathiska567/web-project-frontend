import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
  const [title, setTitle] = useState('');
  const [records, setRecords] = useState([]);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [ImageRecords, setImageRecords] = useState([]);

  function convertToBase64(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.onerror = error => {
        console.log('Error: ', error);
      };
    }
  }

  // Add title to database
  const addBlog = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/v1/blogs/create-blog', { title });

      if (res.data.success) {
        alert('Blog created');
        setTitle('');
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      alert('Please Enter paragraph');
    }
  };

  // Fetch all blog records from the database
  const displayBlogs = () => {
    axios
      .get('http://localhost:8080/api/v1/blogs/all-blog')
      .then((res) => {
        setRecords(res.data.blogs);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // Add blog and image to database
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please select an image');
      return;
    }

    setLoading(true);

    try {
      await addBlog();

      const res = await axios.post('http://localhost:8080/api/v1/images/create-images', { image });

      if (res.data.success) {
        alert('Image created');
        setImage('');
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Fetch all image records from the database
  const getImageRecords = () => {
    axios
      .get('http://localhost:8080/api/v1/images/all-images')
      .then(res => {
        if (res.data.success) {
          setImageRecords(res.data.images);
        } else {
          alert('No images found');
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  // Convert base64 to image URL
  const convertBase64ToImage = base64String => {
    return base64String;
  };

  return (
    <div className='Upload-main-div'>
      <form action="" onSubmit={handleSubmit} className='upload-blog'>
        <input
          type="text"
          placeholder="Add your Title and Paragraph here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <input type="file" accept="image/*" onChange={convertToBase64} />
        {image && <img src={image} alt="" width={100} height={100} />}

        <br /><br />

        <button type="submit" className="btn btn-primary">
          Add Blog and Image
        </button>

        <button type="button" className="btn btn-primary" onClick={displayBlogs}>
          Display All Blogs
        </button>

        <button type="button" className="btn btn-primary" onClick={getImageRecords}>
          Get Images
        </button>
      </form>

      <div>
        <table>
          <tbody>
            <tr>
              <td>
                {records.map((blog) => (
                  <p key={blog.id} className='blog-section'>{blog.title}</p>
                ))}
              </td>
            </tr>
            <tr>
              <td>
                {ImageRecords.length > 0 ? (
                  ImageRecords.map(image => (
                    <img key={image._id} src={convertBase64ToImage(image.image)} alt="" width={300} height={300} style={{ padding: "40px" }} className='image-section' />
                  ))
                ) : (
                  <p className='imageText'>No images available</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br /><br />
    </div>
  );
}
