import React, {useState} from 'react';
// import { Container } from 'react-bootstrap';
// import { Button } from 'antd';
function State() {
    // const[count, setCount] = useState(0);
    // const [data, setData] = useState("Java script String");
    var [login,logOut] = useState(true);
     return (
        <div>
        {login ? <h2>this is login</h2> : <h2>this is logOut</h2>}
        </div>
    //     <div>
    //     <Container>
    //     <h1>{count}</h1>

    //     <Button type="primary" danger onClick={()=>setCount(count+1)}>
    //   Counter
    // </Button>
    // <h1>{data}</h1>
    // <Button type="primary" danger  onClick={()=>setData("use Satae")}>Update Data</Button>
    //         </Container>
            
   

// if (login)
// {
// return (
//     <div>
//       <h2>this is login</h2>
//     </div>
// )

// }
// else
// {
//   return(
//     <div>
//       <h2>this is logOut</h2>
//     </div>
  );
        // </div>
    // );
}

export default State;
