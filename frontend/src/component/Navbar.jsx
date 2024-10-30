import React from 'react'
import { Button } from 'react-bootstrap'
import "./navbar.css"
import { Link, useLocation } from 'react-router-dom'
import { SiWpexplorer } from "react-icons/si";

const Navbar = () => {

    const location = useLocation()

    return (
        <div className='mynavbar '>
            <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px" }}>

                <div className="logo" style={{ fontSize: "25px", fontWeight: "500", color: "#fff", textShadow: "rgb(255, 255, 255) 5px -2px 16px" }}>Ghaith <span style={{ color: "#8d5cdf" }}>AI</span> </div>
                {
                    location.pathname == "/CreateImagepage" ?
                        <Link to={"/"}>
                            <Button className='px-4' style={{ fontSize: "17px" }} variant="primary"> Explor Posts <SiWpexplorer /></Button>{' '}
                        </Link>
                        :
                        <Link to={"/CreateImagepage"}>
                            <Button className='px-4' style={{ fontSize: "17px" }} variant="primary"> + Create image</Button>{' '}
                        </Link>
                }

            </div>
        </div>
    )
}

export default Navbar