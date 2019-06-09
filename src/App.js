// @flow
import React from 'react';
import './App.css';
import Loading from './components/Loading.js';
import Alert from './components/Alert.js';

import { useQuery } from 'urql';

const List = ({data}) : Object => {
  return(
    <div className="pa3 pa5-ns">
      <ul className="list pl0 measure center">
      {data &&
            data.map(post => (
              <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" key={post.id}>{post.title}
              <br></br>
              <a href={post.content}>{post.content}</a>
              </li>
            ))}
      </ul>
    </div>
  )
}

const App = () => {

  const [result] = useQuery({
    query: `{ feed { id
                     title
                     content } }`,
  });

  const { fetching, data, error } = result;
  if(error)
    return <Alert message={error}/>;

  return fetching ? <Loading/> : <> <List data={data.feed}/> </>;
};

export default App;