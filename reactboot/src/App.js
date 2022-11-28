// import React from 'react';
// import './App.css';
// import MaterialTable from "material-table";

//   function App() {
//     return (
//     <div>
//     <div style={{ maxWidth: '90%' }}>
//     <MaterialTable
//      columns={[
//      { title: 'Adeu', field: 'name' },
//      { title: 'Soyad', field: 'surname' },
//      { title: 'Doğum Yulu', field: 'birthYear', 
//      type: 'numeric' },
//      { title: 'Doğum Yeri', field: 'birthCity', 
//      lookup: { 34: 'İstanbul', 63: 'Şanluurfa' } }
//       ]}
//     data={[{ name: 'Mehmet', surname: 'Baran',birthYear: 1987,birthCity:63}]}
//     title="Demo Title"
//     />
//     </div>
//     </div>
//     );
//   }

//   export default App;
//*  import React from 'react';
// import MaterialTable from 'material-table';


//  function RefreshData() {
//   const tableRef = React.createRef();
  
//   return (
//     <MaterialTable        
//       title="Refresh Data Preview"
//       tableRef={tableRef}
//       columns={[
//         {
//           title: 'Avatar',
//           field: 'avatar',
//           render: rowData => (
//             <img
//               style={{ height: 36, borderRAdeuus: '50%' }}
//               src={rowData.avatar}
//             />
//           ),
//         },
//         { title: 'Id', field: 'id' },
//         { title: 'First Name', field: 'first_name' },
//         { title: 'Last Name', field: 'last_name' },
//       ]}
//       data={query =>
//         new Promise((resolve, reject) => {
//           let url = 'https://reqres.in/api/users?'
//           url += 'per_page=' + query.pageSize
//           url += '&page=' + (query.page + 1)
//           fetch(url)
//             .then(response => response.json())
//             .then(result => {
//               resolve({
//                 data: result.data,
//                 page: result.page - 1,
//                 totalCount: result.total,
//               })
//             })
//         })
//       }
//       actions={[
//         {
//           icon: 'refresh',
//           tooltip: 'Refresh Data',
//           isFreeAction: true,
//           onClick: () => tableRef.current && tableRef.current.onQueryChange(),
//         }
//       ]}
//     />
//   )
// }
// export default RefreshData;
// import React from 'react';
// import Example from './Example';
// import Recharts from './Recharts';
// import Compo from './components/Compo';
// import Icon from './Icon'
// import TransferList from './TransferList';
// import ImgComponent1 from './ImgComponent1';
// import ImgComponent2 from './ImgComponent2';
// import Component3 from './Component3';
// import Card from './CardDesign';
// import Color from './ColorDesign';
// import DataGridDemo from './DataGridDemo';
// import Avatar from './Avatar1';
// import Badge from './Badge';
// //  import StripedGrid1 from './StripedGrid';
// // import CardDesign from './CardDesign';

// function App() {
//   return (
 
//     <div>

    /* <TransferList/> */
  //  <Example/>

      /* <Recharts/> */
//  <ImgComponent1/>
//  <ImgComponent1/>
//   <Component3/>
  /* <ImgComponent2/> */
/* // <DataGridDemo/>
// <Compo/>
// <Icon/>

// <Color/>
// <Card/> 
// <Avatar/>
// <Badge/> */
  /* <StripedGrid1/>  */
     /* </div> */
    
/* //   );
// } */

// export default App;
//import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { About } from './About';
// import { Home } from './Home';
// import { Services } from './Services';

// function App(){
//   return(
//     <div>

//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/services' element={<Services />} />

//         </Routes>
//       </BrowserRouter>

//     </div>
//   )
// }

// export default App;



// import React from 'react';
// import './App.css';
// import Table1 from './components/Table1';
//   import  {useEffect,useState} from 'react';
// import './components/style.css';

//   function App() {
   

//       const [users,setUser]=useState([])
//       useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/photos")
//         .then((result)=>{ result.json()
//         .then((resp)=>{
//             // console.warn(resp)
//             setUser(resp)
//           })
//         })
//       },[])
    
//       console.warn(users)
    
   
    
   
//     return (
//      <div>
//    <Table1/>
      
//       <div className="App">
//         <h1 className='bg-info text-light text-center'>Get API JSON todos </h1>
//         <table border="1px silid black">
//         <tbody>
//         <tr>
//             <td>User ID</td>
//             <td>Description</td>
//             <td>Title</td>
//             <td>url</td>
//            <td>thumbnailUrl</td>
//           </tr>
//           {
//             users.map((item,i)=>
//               <tr key={i}>
//               <td>{item.albumId}</td>
//             <td>{item.title}</td>
//             <td>{item.id}</td>
//             <td>{item.url}</td>
//               <td>{item.thumbnailUrl}</td>
//             </tr>
//             )
//           }
//         </tbody>
//         </table>
//       </div> 
//       </div>
//      );
//   }
//   export default App;


// import React from 'react';

//   function App() {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(response => response.json())
//   .then(json => console.log(json))
//     var data =[
//       {
//         id:1,name:"ui ux", address:"village Jhurak Jhundi post dheeraj Nagar"
//       },
//       {
//         id:1,name:"react js", address:"viallge kheraj khushaplpur Tanda Rampur"
//       },
//       {
//         id:1,name:"wordpress", address:"Delhi India Batla House"
//       },
//       {
//         id:1,name:"php mysql", address:"Tanda Rampur and saidnagear"
//       }
//     ]
//     return (
//       <div>
// {
        
//           data.map((data)=>(
//             <div>
//               {data.name}
//               {data.id}
//               {data.address}
//             </div>
//           ))
        
// }
//       </div>
//     );
//   }

//   export default App;

  /* what all i have to install for react
1. Node.js
2. Simple react Snippet
3. Simple functional snippet 
4. Ant design snippet 
5. Class autocomplete for html
6. React js code snippets
7. react Bootstrape4 snippets 
8. Quokka.js
9. prettier codeformatter
10. Mui-snippets
11. live server
12. java script snippets pack
13. intelligence for cs class name on HMtL 
14. html Boiler plate. 
15. ES7- React/Redux/React- native snippets
16  . Babel js

*/
import React from 'react';
import 'antd/dist/antd.css';

// import 'antd/dist/antd.dark.less';
import Slider from './components/Slider';
import Car from './Car';
import logo from './images1/logo.webp';
import Profiles from './Profiles';
import Profile from './Profile';
import Cards from './Cards';
import Antdesign from './Antdesign';
import Cal from './Cal';
import Sidebar from './Sidebar';
import Social from './Social';
import FormDetail from './FormDetail';
import './components/style.css';
import './components/script.js';
import State from './State';
import {About} from './About';
// import MatTable1 from './MatTable1';


function App() {

  return (
    <div>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#"><img src={logo} style={{width:'50px', height:'50px'}}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><link to="/About">About</link></a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="/Sevices">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Portfolio</a>
        </li>
           
        <li class="nav-item">
          <a class="nav-link">Contact</a>
        </li>

      </ul>
     
    </div>
  </div>
</nav>




{/* <MatTable1/> */}
<Slider/>
<Profiles/>
<Car/>
<Profile/>
<Cards/>
<Antdesign/>
<Cal/>
<Sidebar/>
<Social/>
<FormDetail/>
<State/>
{/* <MatTable/> */}
 {/* <div>
  
    <Row className='bg-dark'>
<h1>The Quick</h1>
    </Row>
  
</div> */}
    </div> 
  );
}

export default App;


