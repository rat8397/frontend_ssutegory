import React from "react";
import styled,{keyframes} from "styled-components";


const Animation = keyframes`
0%{
  opacity:0
}
100%{
  opacity:1;
}
`;
const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
animation:${Animation} 3s;

padding-top:30px;
padding-left:90px;
padding-right:50px;
font-size:20px;
`;
const Wrapper = styled.div`
border-radius: 20px;
height:100px;
margin-bottom: 20px;
display:flex;
width:500px;

`


export default ({first,second}) => {
    return (
      
        <Wrapper>
          <List>
            <ListItem>
              {first}
            </ListItem>
            <ListItem>
             {second}
            </ListItem>
          </List>
        </Wrapper>
       
        
    
   )

}