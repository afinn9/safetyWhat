import axios from 'axios';
import { useEffect, useState } from 'react';

import '../Styles/Navbar.css';

function Navbar() {
  const [data, setData] = useState({});
  const [dropdowns, setDropdowns] = useState({});

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

  return (
    <div className="navbar-container">
      <h3 className="s-head">SafetyWhat</h3>
      <hr width="100%" color="green" />
      <div className="navbar-items">
        {Object.entries(data).map(([key, value], index) => (
          <div key={index} className="items">
            <h4 onClick={() => toggleDropdown(key)}>{key}</h4>
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
