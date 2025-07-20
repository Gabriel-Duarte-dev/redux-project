import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import type { User } from "../stores/users/types";
import { UserDetails } from "../components/UserDetails";
import { Button } from "../styleds/Button.styled";
import { Container } from "../components/UserDetails/UserDetails.styled";

export function Details() {
  const { userid } = useParams();
  const { users } = useAppSelector((state) => state.users);
  const user = users.find((user: User) => user.id === parseInt(userid || ""));

  if (!user)
    return (
      <Container>
        <h2>Usuário não encontrado...</h2>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
      </Container>
    );

  return <UserDetails user={user} />;
}
