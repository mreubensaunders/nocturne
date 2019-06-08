import React from 'react';
import './App.css';
import Loading from './components/Loading.js';

import { useQuery } from 'urql';

const List = ({data}) => {
  return(
    <ul>      
      {data &&
            data.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
    </ul>
  )
}

const App = () => {

  const [result] = useQuery({
    query: `{ feed { id
                     title } }`,
  });

  const { fetching, data } = result;
  return fetching ? <Loading/> : <List data={data.feed} />;
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
