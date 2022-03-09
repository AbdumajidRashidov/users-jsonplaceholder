import { Link } from "react-router-dom";
import { Card, CardHeader, Avatar } from "@mui/material";
import { useRef } from "react";
export default function UserCard({ id, ava, name, email }) {
  const userRef = useRef();
  return (
    <>
      <li key={id} ref={userRef} style={{ width: "95%" }}>
        <Link to={`posts/${id}`}>
          <Card>
            <CardHeader
              avatar={<Avatar alt={name} src={ava} />}
              title={name}
              subheader={email}
            />
          </Card>
        </Link>
      </li>
    </>
  );
}
