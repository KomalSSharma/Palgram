import styled from 'styled-components'

export const HeaderContainer=styled.nav`
width:100% !important;
height:4rem;
// border:1px solid black;
background-color:white;
padding:0% 5%;
display:flex;
align-items:center;
justify-content:space-between;
position:absolute;
// right:1rem;;
// right:1rem;
z-index:20;


.header-logo{
width:30%;
height:100%;
// border:1px solid red;
display:flex;
align-items:center;
justify-content:flex-start;
// font-size:0.8rem;
img{
    width:2.2rem;
    height:2.2rem;
    float:left;

};
.brand-name{
    font-size:1rem;
    text-decoration:none;
    color:grey;
    // border:1px solid yellow;
    width:80%;
    text-align:left;
    letter-spacing:2px;
    color:#3A98B9;
  font-weight:bold;
}
};

.menu-icon{
    width:70%;
    height:100%;
// border:1px solid red;
    display:flex;
    align-items:center;
    justify-content:flex-end;
}

`






















// export const HeaderBody = styled.div`
// width:100%;
// display:flex;
// align-items:center;
// justify-content:space-between;
// height:100%;
// `

// export const HeaderImgBlock = styled.div`
// width:20%;
// height:100%;
// // border:1px solid red;
// display:flex;
// align-items:center;
// justify-content:flex-start;
// img{
//     width:2.2rem;
//     height:2.2rem;
//     // float:left;

// };
// a{
//     font-size:0.8rem;
//     font-weight:400;
//     letter-spacing:1px;
//     cursor:pointer;
// }
// `

// export const Spacer=styled.div`
// width:60%;
// // border:1px solid yellow
// `

// export const HeaderList=styled.div`
// float:right;
// `

// export const HeaderSpan=styled.div`
// display:flex;

// @media (max-width: 768px) and (min-width:50px) {
//     display:block;
//    };
//    @media (max-width: 1080px) and (min-width:769px) {
//      display:none;
    
//     }

// `



export const HeaderIcon=styled.div`
ul{
    
    list-style:none;
    @media (max-width: 768px) and (min-width:50px) {
       display:block;
      };
      @media (max-width: 1080px) and (min-width:769px) {
        display:flex;
        align-items:center;
        justify-conten:space-between;
       }
    
};
a{
    font-size:0.8rem;
    cursor:pointer;
    text-decoration:none;

}

`