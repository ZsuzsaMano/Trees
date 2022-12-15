import { useEffect, useState } from 'react';
import "./styles.css";
import loader from "./assets/loader.gif";
import TreeCard from './components/TreeCard';
import { setToast } from './utils/status'

const App =()=> {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(
    `https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json`
  )
    .then((response) => response.json())
    .then((treeData) => setData(treeData.trees))
    .then(setLoading(false))
    .catch((error) => {
      setToast(error, "error");
      setLoading(false)
    });;
}, []);

  return (
    <>
      <h1 className="mainTitle">Tree Showcase</h1>
      {loading ? (
        <img
          src={loader}
          alt='loader'
          width="250"
          height="250px"
        />
      ) : (
        <div className="treeCollection">
          {data?.map((tree) => {
            return <TreeCard tree={tree} key={tree.name}/>;
          })}
        </div>
      )}
    </>
  );
}

export default App;
