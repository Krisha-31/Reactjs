import { useEffect, useState, useMemo } from 'react';
import './App.css'
import { BiGridHorizontal } from "react-icons/bi";
import { IoHome, IoSettings, IoFilter  } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";


import logo from './assets/newLogo.png'

function App() {
  const API = "http://localhost:3000/employees";
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch(API, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    }).then((Response) => {
      Response.json().then((data) => {
        setAllData(data);
      });
    });
  }, []);

  const [perPagesData, setPerPagesData] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);


  let totalPages = Math.ceil(allData.length / perPagesData);

  let lastIndex = currentPage * perPagesData;
  let firstIndex = lastIndex - perPagesData;

  let currentPageData = allData.slice(firstIndex, lastIndex);

  const [search, setSearch] = useState("");
  const [issorted, setIsSorted] = useState(false);

  let filterData = useMemo(() => {
    if (!issorted) {
      return [...currentPageData];
    }
    return [...currentPageData].sort((a, b) => {
      return a.department - b.department;
    })
  }, [currentPageData, issorted]);

  const handleFilter = () => {
    if (!issorted)
      setIsSorted(true);

    else
      setIsSorted(false);
  }

  return (
    <>
      <section className='d-flex'>
        <div className='part-1'>
          <img src={logo} className='logo' />
          <h3 className='fw-bold p-4 fontsize'><BiGridHorizontal /></h3>
          <h3 className='fw-bold p-4 fs-3'><IoHome /></h3>
          <h3 className='fw-bold p-4 fs-3'><FaUser /></h3>
          <h3 className='fw-bold p-4 fs-3'><IoSettings /></h3>
          <h3 className='fw-bold p-4 fs-3'><MdOutlineDateRange /></h3>
        </div>
        <div className='full-table'>
          <div className='header'>
            <div>
              <h1 className='nameofc'><img src={logo} className='logo3' />Nyara Energy Limited</h1>
            </div>
            <div>
              <h3 className='fw-bold p-4 fontsize'><BiGridHorizontal /></h3>
            </div>

            <div className='d-flex p-3'>

              <input type="text" placeholder='Search Here' className='flex-grow-1 py-2 px-3 search' onChange={(e) => {
                setSearch(e.target.value);
              }} />

            </div>

          </div >
          <div className='main-table'>
            <div className='d-flex enl'>
              <h3>Employees</h3>
              <img src={logo} className='logo2' />
            </div>
            <table className="table table-bordered table-striped">
              <thead className="danger">
                <tr>
                  <th>ID</th>
                  <th className='d-flex justify-content-between align-items-center'>Employee ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th className='d-flex depart'>Department
                     <IoFilter  onClick={handleFilter} size={20} /></th>
                  <th>Position</th>
                  <th>Salary</th>
                </tr>
              </thead>

              <tbody>
                {filterData.filter((element) =>
                {
                     return element.name.toLowerCase().includes(search.toLowerCase())
                }).map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.employeeId}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.department}</td>
                    <td>{employee.position}</td>
                    <td>₹{employee.salary}</td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="7">
                    <div className="d-flex justify-content-between align-items-center">

                      <div className="d-flex align-items-center gap-2">
                        <span>Pages per data</span>

                        <select className="form-select form-select-sm w-auto" value={perPagesData} onChange={(e) => setPerPagesData(e.target.value)}>
                          <option>05</option>
                          <option>10</option>
                          <option>15</option>
                          <option>20</option>
                          <option>100</option>
                        </select>
                      </div>

                      <div>
                        <span className="fw-bold">Page {currentPage} of {totalPages}</span>
                      </div>

                      <div className="d-flex gap-2">
                        <button className="btn btn-danger btn-sm" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage == 1}>
                          Previous
                        </button>

                        <button className="btn btn-primary btn-sm" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage == totalPages}>
                          Next
                        </button>
                      </div>

                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default App