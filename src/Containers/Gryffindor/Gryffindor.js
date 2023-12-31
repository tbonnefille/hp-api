import "./gryffindor.css";



import Card from "../../Components/Card/Card";
import { useState, useEffect } from "react";


function Gryffindor() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchtheData = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters/house/gryffindor"
      );
      const responseApi = await response.json();
      setData(responseApi);
    };

    fetchtheData();
  }, []);

//onsole.log(data);

  return (
    <div className="Gryffindor">

      <div className="houseName">Gryffindor</div>

      <div className="cardholder">


        {data.length === 0 ? (
         <div>RIEN</div>
        ) : (
          data.map((character, i) => {
            return <div key={i}>{<Card character={character} />}</div>;
          })
        )}
      </div>

    </div>

  );
}
export default Gryffindor;