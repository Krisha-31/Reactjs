import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/footer";

const Book = [
  {
    BookName: "Since 1894 Captain Jeon",
    Image : "https://img.wattpad.com/cover/278035589-144-k76392.jpg" ,
    Price : "₹198.00"
  },

  {
    BookName: "Your Fault",
    Image : "https://img.wattpad.com/cover/411267716-256-k664016.jpg" ,
    Price : "₹353.56"
  },

  {
    BookName: "Lovely obsession",
    Image : "https://img.wattpad.com/cover/379399127-256-k126020.jpg" ,
    Price : "₹304.95"
  },

  {
    BookName: "Hunting Adeline",
    Image : "https://m.media-amazon.com/images/I/61V72zGpDfL._SY522_.jpg" ,
    Price : "₹2,607"
  },

  {
    BookName: "The Only Girl of Class E",
    Image : "https://img.wattpad.com/cover/389097748-256-k992145.jpg",
    Price: " ₹179"
  },

  {
    BookName : "Captive Bonds",
    Image:"https://img.wattpad.com/cover/402618756-256-k897507.jpg",
    Price:"₹180"
  }
]

import './App.css'
function App() {
 
  return (
    <>
    <Header/>
    <Home mydata={Book}/>
    <Footer/>
    </>
  )
}

export default App;