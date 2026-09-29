# 📝 React Blog CRUD Application

A simple and responsive **Blog Management Application** built with **React JS** and **JSON Server**.

This project allows users to **view, add, edit, and delete blog posts**. Each blog contains a title, director, category, description, date, and image URL.

## 🚀 Features

* 📖 Display all blog posts
* ➕ Add new blog posts
* ✏️ Edit existing blog posts
* 🗑️ Delete blog posts
* 🖼️ Display blog images using image URLs
* 📅 Add publication date
* 🏷️ Blog categories
* 🎬 Director information
* 💾 Store data using JSON Server
* 🔄 Perform CRUD operations using Fetch API
* 📱 Responsive card-based layout

## 🛠️ Technologies Used

* **React JS**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Bootstrap**
* **JSON Server**
* **Fetch API**
* **Vite**

## 📂 Project Structure

```text
react-blog/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── db.json
├── package.json
├── package-lock.json
└── README.md
```

## 📊 Blog Data

The application stores blog data inside `db.json`.

Each blog contains:

```json
{
  "id": "1",
  "title": "The Art of Photo",
  "director": "Creative Photography",
  "category": "Photography",
  "description": "Photography is a creative way to capture beautiful moments.",
  "date": "2026-09-28",
  "image": "https://example.com/image.jpg"
}
```

## 🔗 JSON Server API

The project uses the following API:

```text
http://localhost:3000/blog
```

### GET

Fetch all blogs:

```text
GET http://localhost:3000/blog
```

### POST

Add a new blog:

```text
POST http://localhost:3000/blog
```

### PUT

Update an existing blog:

```text
PUT http://localhost:3000/blog/:id
```

### DELETE

Delete a blog:

```text
DELETE http://localhost:3000/blog/:id
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

```bash
cd react-blog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install JSON Server

If JSON Server is not installed:

```bash
npm install json-server
```

## ▶️ Run the Project

You need to run **JSON Server** and **React**.

### Start JSON Server

```bash
npx json-server --watch db.json --port 3000
```

Your API will be available at:

```text
http://localhost:3000/blog
```

### Start React

Open another terminal and run:

```bash
npm run dev
```

The React application will then run on the Vite development server.

## 📝 Add Blog

The form contains the following fields:

* Title
* Director
* Category
* Description
* Date
* Image URL

Click the **ADD** button to create a new blog.

## ✏️ Edit Blog

Click the **EDIT** button on any blog card.

The selected blog data will automatically appear in the form.

After changing the information, click **EDIT** to update the blog.

## 🗑️ Delete Blog

Click the **DELETE** button on a blog card to remove that blog from the JSON Server database.

## 🖼️ Image Support

The project accepts image URLs through the Image URL input.

Example:

```text
https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800
```

The image is displayed using:

```jsx
<img src={element.image} alt="" className="img" />
```

## 🔄 CRUD Operations

| Operation | HTTP Method | API         |
| --------- | ----------- | ----------- |
| Create    | POST        | `/blog`     |
| Read      | GET         | `/blog`     |
| Update    | PUT         | `/blog/:id` |
| Delete    | DELETE      | `/blog/:id` |

## 🎯 Project Purpose

The main purpose of this project is to understand how **React JS communicates with a REST API** using the Fetch API.

It demonstrates basic CRUD functionality:

**Create → Read → Update → Delete**

## 📚 Learning Outcomes

Through this project, you can learn:

* React `useState`
* React components
* Event handling
* Form handling
* Controlled inputs
* Fetch API
* REST API
* JSON Server
* CRUD operations
* POST, GET, PUT and DELETE requests
* Dynamic rendering using `.map()`
* Working with API data
* Displaying dynamic images

## 👨‍💻 Author

**KRISHA SANGANI**

### ⭐ If you like this project

Give the repository a ⭐ on GitHub and feel free to improve the project with new features such as:

* 🔍 Search blogs
* 🏷️ Category filtering
* 📄 Blog details page
* ❤️ Like button
* 🔐 Login system
* 📱 Improved mobile UI
* 🌐 Deployment

## 🎥 Demo Video

[▶️ Watch Demo Video](https://drive.google.com/file/d/15GdtsAEh7Q8V0tk1QdFGpXt43l3KpITg/view?usp=sharing)

```
```