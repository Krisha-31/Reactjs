import './App.css'
import { useState } from 'react';

function App() {
  const API = "http://localhost:3000/blog";
  const [myList, setMyList] = useState([]);
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(null);
  const [category, setCategory] = useState("");

  fetch(API, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  }).then((Response) => {
    Response.json().then((data) => {
      setMyList(data);
    });
  })

  const handleClick = (e) => {
    // e.preventDefault();
    const blog = {
      title, director, category, description, date, image
    };

    if (!id) {
      fetch(API, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(blog)
      })
    } else {
      fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(blog)
      })
    }
  }


  const handleDelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
  }

  const handleEdit = (blog) => {
    setId(blog.id);
    setTitle(blog.title);
    setDirector(blog.director);
    setDate(blog.date);
    setDescription(blog.description);
    setCategory(blog.category);
    setImage(blog.image);
  }



  return (
    <>
      <section className='main'>
        <div className='Form-sec'>
          <form>
            <input type="text" value={title} placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} />
            <br />
            <input type="text" value={director} placeholder='Director' onChange={(e) => { setDirector(e.target.value) }} />
            <br />
            <input type="text" value={category} placeholder='Category' onChange={(e) => { setCategory(e.target.value) }} />
            <br />
            <input type="text" value={description} placeholder='Description' onChange={(e) => { setDescription(e.target.value) }} />
            <br />
            <input type="date" value={date} placeholder='date' onChange={(e) => { setDate(e.target.value) }} />
            <br />
            <input type="url" value={image} placeholder='Image URL' onChange={(e) => { setImage(e.target.value) }} />
            <br />
            <button className='Add-btn' onClick={handleClick}>{(id) ? "EDIT" : "ADD"}</button>
          </form>
        </div>

        {/* part-2------------------------------------------ */}
        {/* line----- */}
        <div className='vertical-line'></div>
        {/* disply */}
        <div className='container mt-4'>
          <h1 className='maintitle'>Discover. Read. Explore.</h1>
          <div className='row g-4'>
            {
              myList.map((element, index) => {
                return (
                  <>
                    <div key={index}>
                      <div className='card h-100 shadow-css'>
                        <div className='card-body d-flex'>
                          <img src={element.image} alt="" className="img" />
                          <div>
                            <h6 className='text-muted'>Id : {index + 1}</h6>
                            <h4 className='card-title'>{element.title}</h4>
                            <h6>Category : {element.category}</h6>
                            <h6 className='text-primary'>DIRECTOR : {element.director}</h6>
                            <p className='card-text'>
                              {element.description}
                            </p>
                            <p className='text-secondary mb-0'>
                              <strong>DATE :</strong> {element.date}
                            </p>
                            <div className='p-4 d-flex btnss'>
                              <button className='dlt-btn' onClick={() => { handleDelete(element.id) }}>DELETE</button>
                              <button className='edt-btn' onClick={() => { handleEdit(element) }}>EDIT</button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
          <h5 className='footer'>Discover interesting stories from Technology, Games, Movies, Sports, Business, Travel and more.</h5>
        </div>
      </section>
    </>
  )
}

export default App;