import styled from 'styled-components'

export const HomeContainer=styled.div`
width:100%;
padding:1% 5%;
min-height:100%;
// border:1px solid black;
display:inline-block;
text-align:left;
text-transform: capitalize;
font-size:0.4rem;
// padding-bottom:0;
// margin-bottom:-1.4rem;
margin-top:1rem;


.hands{
    display:flex;
    width:2rem;
    height:2rem;
};





h1{
    color:black !important;
    padding:1.2rem;
    font-size:1.4rem !important;
};
p{
    text-align:justify;
    // margin-right:50%;
    padding:1.2rem;
    font-size:1rem;
    letter-spacing:1px;
    margin-bottom:0.4rem;
}

.image-slider{
    display: flex;
    alignItems: center;
    justifyContent: center;
    backgroundSize: cover;
    height: 20rem;
    margin-top:4rem;
};
// .home-content:{
//     width:100%;
//     height:14rem;
//     border:1px solid orange;
//     .home-content-heading{
      
//       color:purple !important;
//       padding:1.2rem;
//       font-size:1.4rem !important;
    
//     };

//     .home-content-desc{
        
//     }
// };

/* ****************from Komal */

.card-container{
    width:100%;
    min-height:14rem;
    display:flex;
    // flex-flow:row nowrap;
    justify-content:space-between;
    align-items:center;
    // border:1px solid red;

    @media (max-width:768px){
        display:inline-block;
        // background-color:blue;
        // flex-flow:column nowrap;
        // align-items:center;
        // justify-content:space-between;
        // padding:0 0.1rem;

    }
    


    
   
  
        
   
 

   

  

}
`