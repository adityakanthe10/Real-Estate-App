// import  from 'react'
import "./Homepage.scss"
import SearchBar from "../../Components/SearchBar/SearchBar"
const Homepage = () => {
  return (
    <div className="homePage">
    <div className="textContainer">
      <div className="wrapper">
      <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem ipsa cupiditate ad veritatis delectus a tenetur est, asperiores, doloribus inventore nobis consectetur recusandae aliquid exercitationem voluptates unde, nesciunt dolore?
      </p>
      <SearchBar/>
      <div className="boxes">
        <div className="box">
        <h1>16+</h1>
        <h2>Years Of Experience</h2>
      </div>
        <div className="box">
        <h1>200</h1>
        <h2>Award Gained</h2>
      </div>
        <div className="box">
        <h1>2000+</h1>
        <h2>Property Ready</h2>
      </div>
      </div>
      </div>
    </div>
    <div className="imgContainer">
      <img src="/bg.png" alt="" />
    </div>
    </div>
  )
}

export default Homepage