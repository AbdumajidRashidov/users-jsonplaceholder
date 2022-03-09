import { useEffect, useState } from "react";
import "./Home.scss";
//componets
import UserCard from "../../Components/UsersCard/UserCard";
import Loader from "./../../Components/Loader/Loader";

//static images
import ava1 from "../../Assets/Images/avataaars(1).png";
import ava2 from "../../Assets/Images/avataaars(2).png";
import ava3 from "../../Assets/Images/avataaars(3).png";
import ava4 from "../../Assets/Images/avataaars(4).png";
import ava5 from "../../Assets/Images/avataaars(5).png";
import ava6 from "../../Assets/Images/avataaars(6).png";
import ava7 from "../../Assets/Images/avataaars(7).png";
import ava8 from "../../Assets/Images/avataaars(8).png";
import ava9 from "../../Assets/Images/avataaars(9).png";
import ava10 from "../../Assets/Images/avataaars(10).png";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/users`)
      .then((res) => res.json())
      .then((data) => {
        const avatars = [
          ava1,
          ava2,
          ava3,
          ava4,
          ava5,
          ava6,
          ava7,
          ava8,
          ava9,
          ava10,
        ];
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < avatars.length; j++) {
            if (i === j) {
              data[i].ava = avatars[j];
            } else {
              continue;
            }
          }
        }
        setData(data);
        if (data.length > 0) {
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          data.length > 0 && (
            <ul className="users">
              {data.map((item) => {
                return (
                  <UserCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    ava={item.ava}
                    email={item.email}
                  />
                );
              })}
            </ul>
          )
        )}
      </div>
    </>
  );
}
