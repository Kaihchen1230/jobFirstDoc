import React from 'react';

let imageStyle = {
    padddingLeft:"0px",
    position:"relative",
    left:"40%",
    top:"-20%",
    border:"2px solid white",
    borderRadius: "10px"
};

const profileCard = (props) => {
    return (
        <div  >
            <img data-testid="businessPic" style={imageStyle} width ="150" src = {props.companyLogo} >
            </img>   
        </div>
    )
}
export default profileCard;

