# Employee Management Dashboard

A responsive **Employee Management Dashboard** built using **React.js**.
The application fetches employee data from a local REST API and displays it in a structured and interactive table.

## 🚀 Features

* 📊 Employee data dashboard
* 🔍 Search employees by name
* 🔽 Sort/filter employees by department
* 📄 Pagination
* 👥 Employee details table
* 💰 Salary information
* 📱 Responsive dashboard layout
* 🎨 Bootstrap styling
* 🖼️ Custom company logo
* ⚡ React Hooks for state and data management
* 🎯 React Icons for dashboard icons

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **Bootstrap**
* **React Icons**
* **CSS**
* **REST API / JSON Server**
* **Vite** (if the project was created using Vite)

## 📋 Employee Information

The dashboard displays the following employee information:

| Field       | Description                    |
| ----------- | ------------------------------ |
| ID          | Unique employee ID             |
| Employee ID | Employee identification number |
| Name        | Employee name                  |
| Email       | Employee email address         |
| Department  | Employee department            |
| Position    | Employee job position          |
| Salary      | Employee salary                |

The employee data is retrieved from the local API endpoint:

```text
http://localhost:3000/employees
```

The provided data contains employee records with fields such as employee ID, name, email, department, position and salary.

## ✨ Main Functionalities

### 🔍 Search

Users can search for an employee by entering their name in the **Search Here** input field.

The search is case-insensitive, making it easier to find employees quickly.

### 🔽 Department Filter

The filter icon beside the **Department** column can be clicked to sort the currently displayed employee records by department.

### 📄 Pagination

The dashboard supports pagination so that multiple employee records can be displayed across different pages.

Users can select the number of records displayed per page:

* 5
* 10
* 15
* 20
* 100

The dashboard also provides:

* Previous button
* Next button
* Current page number
* Total page count

### 💰 Salary Display

Employee salaries are displayed using the Indian Rupee symbol:

```text
₹45000
```

## ⚛️ React Concepts Used

This project demonstrates several important React concepts.

### useState

`useState` is used to manage:

* Employee data
* Search value
* Current page
* Records per page
* Department sorting state

Example:

```javascript
const [allData, setAllData] = useState([]);
const [search, setSearch] = useState("");
const [currentPage, setCurrentPage] = useState(1);
```

### useEffect

`useEffect` is used to fetch employee data when the application loads.

```javascript
useEffect(() => {
    fetch(API)
        .then(response => response.json())
        .then(data => {
            setAllData(data);
        });
}, []);
```

### useMemo

`useMemo` is used to calculate the filtered/sorted employee data efficiently.

```javascript
const filterData = useMemo(() => {
    if (!isSorted) {
        return [...currentPageData];
    }

    return [...currentPageData].sort((a, b) => {
        return a.department - b.department;
    });
}, [currentPageData, isSorted]);
```

## 📁 Suggested Project Structure

```text
employee-dashboard/
│
├── src/
│   ├── assets/
│   │   └── newLogo.png
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── ...
│
├── public/
│
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the project

```bash
git clone <your-github-repository-url>
```

### 2. Open the project

```bash
cd employee-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install React Icons

If React Icons is not already installed:

```bash
npm install react-icons
```

### 5. Install Bootstrap

```bash
npm install bootstrap
```

### 6. Start the JSON Server

The application uses:

```text
http://localhost:3000/employees
```

Make sure your employee JSON data is available through a local API/JSON Server before running the application.

For example:

```bash
npx json-server --watch db.json --port 3000
```

### 7. Start the React application

For a Vite project:

```bash
npm run dev
```

Then open the URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 🖥️ How to Use

1. Start the JSON Server.
2. Start the React development server.
3. Open the application in your browser.
4. View the employee records.
5. Use the **Search Here** box to search employees.
6. Click the filter icon beside **Department** to sort the data.
7. Select the required number of records per page.
8. Use **Previous** and **Next** to navigate between pages.

## 🎯 Project Purpose

The main purpose of this project is to practice building a real-world React dashboard using:

* API data fetching
* React Hooks
* Search functionality
* Sorting
* Pagination
* Tables
* Bootstrap
* React Icons
* JSON Server

## 🔮 Future Improvements

The project can be extended with:

* Add employee functionality
* Edit employee details
* Delete employee functionality
* Department-based filtering
* Salary sorting
* Employee profile pages
* Login/authentication
* Dashboard statistics
* Backend database integration
* Mobile-friendly navigation
* Dark mode

## 👩‍💻 Author

**Krisha Sangani**

Computer Engineering Student
React.js & Full Stack Development Learner

---

⭐ If you find this project useful, consider giving it a star on GitHub.
