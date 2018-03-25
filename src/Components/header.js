import React from 'react'

const Header = (props) => {
  return (

        <h1 className="col-sm-4"><a href='index.html'>Hilliard IOT</a></h1>


   )
}

const NavBar = (props) => {
	return(
		<nav className="col-sm-8 text-right">
		  <a href="views/team.html"><p>Team</p></a>
		  <a href="views/currentProjects.html"><p>Current projects</p></a>
		  <a href="views/contact.html"><p>Contact</p></a>
		</nav>
    )
}

export {Header, NavBar}