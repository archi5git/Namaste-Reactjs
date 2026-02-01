import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 * -Logo
 * -Nav items
 * Body
 * -Search
 * -RestrauntContainer
 * -RestrauntCards
 * Footer
 * -copyright
 * -Links
 * -Address
 * -contact
 */
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"src="https://marketplace.canva.com/EAFFy8herRo/2/0/800w/canva-red-and-blue-simple-personal-chef-logo-JNI64rC9Qxc.jpg"/>

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
};
const styleCard={
    backgroundColor:"#8d8585"
}
const RestrauntCard=({resname,cousines,star,time})=>{
    return(
        <div>
        <div className="res-cards" style={styleCard}>
            <img 
            alt="res-logo"
            src=" https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1154cffac2453eb0bf7fdda7e5ea1659"
             width="100%"/>
            <h3>{resname}</h3>
            <h4>{cousines}</h4>
            <h4>{star}</h4>
            <h4>{time}</h4>
            </div>
        </div>
    )
};

const Body=()=>{
    return(
        <div className="body">
            <div className="search"><form>Search: 
                <input type="Search" placeholder="Search here"></input></form></div>
            <div className="res-container">

                <RestrauntCard resname="Shivam Food" cousines={"chines,South Indian"} star="4"time="12mins"/>                <RestrauntCard resname="Meghana Food" cousines="idli, Dosa, Biryani"star="4.5" time="30mins"/>
                <RestrauntCard resname="KFC" cousines="Burger,Fries,Hotdog" star="4.2" time="20mins"/>
            </div>
        </div>

    )
    

};
const AppLayout = ()=> {
    return(
        <div className ="app">
            <Header/>
            <Body/>
        </div>
    )

};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);