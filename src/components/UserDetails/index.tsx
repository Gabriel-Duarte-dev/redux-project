import { Component, type ReactNode } from "react";
import * as S from "./UserDetails.styled";
import { Button } from "../../styleds/Button.styled";
import type { User } from "../../stores/users/types";

interface UserDetailsProps {
  user: User | null;
  onClose: () => void;
}

export class UserDetails extends Component<UserDetailsProps> {
  render(): ReactNode {
    const { user, onClose } = this.props;

    if (!user) return null;

    return (
      <S.Overlay onClick={onClose}>
        <S.Modal onClick={(e) => e.stopPropagation()}>
          <h2>{user.name}</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Telefone:</strong> {user.phone}
          </p>
          <p>
            <strong>Endereço:</strong> {user.address.street},{" "}
            {user.address.city}
          </p>
          <p>
            <strong>Empresa:</strong> {user.company.name}
          </p>
          <p>
            <strong>Site:</strong> <a href={user.website}>{user.website}</a>
          </p>
          <Button $variant="secondary" onClick={onClose}>
            Fechar
          </Button>
        </S.Modal>
      </S.Overlay>
    );
  }
}
