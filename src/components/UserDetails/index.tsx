import { Component, type ReactNode } from "react";
import { Button } from "../../styleds/Button.styled";
import { Link } from "react-router-dom";
import * as S from "./UserDetails.styled";
import type { User } from "../../stores/users/types";

interface UserDetailsProps {
  user: User | null;
}

export class UserDetails extends Component<UserDetailsProps> {
  render(): ReactNode {
    const { user } = this.props;

    if (!user) return null;

    return (
      <S.Container>
        <S.Card onClick={(e) => e.stopPropagation()}>
          <h2>{user.name}</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Telefone:</strong> {user.phone}
          </p>
          <S.List>
            <li>
              <strong>Endereço:</strong>
            </li>
            <li>
              <strong>Rua:</strong> {user.address.street}
            </li>
            <li>
              <strong>Cidade:</strong> {user.address.city}
            </li>
            <li>
              <strong>CEP:</strong> {user.address.zipcode}
            </li>
            <li>
              <strong>Unidade:</strong> {user.address.suite}
            </li>
          </S.List>
          <S.List>
            <li>
              <strong>Empresa:</strong>
            </li>
            <li>
              <strong>Nome:</strong> {user.company.name}
            </li>
            <li>
              <strong>Slogan:</strong> {user.company.catchPhrase}
            </li>
            <li>
              <strong>Expertise:</strong> {user.company.bs}
            </li>
          </S.List>
          <p>
            <strong>Site:</strong> <a href={user.website}>{user.website}</a>
          </p>
          <Link to="/">
            <Button $variant="secondary">Voltar</Button>
          </Link>
        </S.Card>
      </S.Container>
    );
  }
}
