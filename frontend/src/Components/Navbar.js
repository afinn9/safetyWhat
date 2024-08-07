import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Styles/Navbar.css';
import useGlobalState from './GlobalState';

function Navbar() {
  const [data, setData] = useState({});
  const [dropdowns, setDropdowns] = useState({});
  
  const { listState, setListState } = useGlobalState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://127.0.0.1:8000/navbar/');
      if (response.data.data.length > 0) {
        setData(response.data.data[0].name);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = (key) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [key]: !prevDropdowns[key]
    }));
  };

  const keyHandler = (key) => {
    if (key === 'Users') {
      setListState(true);
    }
  };

  useEffect(() => {
    console.log("listState:", listState);
  }, [listState]);

  return (
    <div className="navbar-container">
      <h3 className="s-head">SafetyWhat</h3>
      <hr width="100%" color="green" />
      <div className="navbar-items">
        {Object.entries(data).map(([key, value], index) => (
          <div key={index} className="items">
            <h4 onClick={() => { toggleDropdown(key); keyHandler(key); }}>{key}</h4>
            {dropdowns[key] && (
              <ul>
                {value.map((item, idx) => (
                  <h3 key={idx} className="sub-items">{item}</h3>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
