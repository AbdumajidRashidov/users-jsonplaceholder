import { Link } from "react-router-dom";
import { Card, CardHeader, Avatar } from "@mui/material";
import { useRef } from "react";
import "./UserCard.scss";
export default function UserCard({ id, ava, name }) {
  const userRef = useRef();
  return (
    <>
      <li key={id} ref={userRef} className="user-card">
        <Link to={`posts/${id}`}>
          <Card style={{ height: "200px", width: "200px" }}>
            <CardHeader
              style={{ display: "block", textAlign: "center" }}
              avatar={
                <Avatar
                  sx={{ width: 72, height: 72, margin: "10px auto" }}
                  alt={name}
                  src={ava}
                />
              }
              title={name}
            />
          </Card>
        </Link>
      </li>
    </>
  );
}
