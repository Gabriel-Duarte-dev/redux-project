import type { User } from "../../stores/users/types";
import { Button } from "../../styleds/Button.styled";
import { FaClipboardList } from "react-icons/fa";
import * as S from "./UserList.styled";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../stores/users/users-slice";
import { getInitalNameLetter } from "../../utils/getInitalNameLetter";
import { Link } from "react-router-dom";
import { FavoriteButton } from "./FavoriteButton";

interface UserListProps {
  users: User[] | [];
  favorites: User[] | [];
  displayOption: "all" | "favorites";
}

export function UserList({ users, favorites, displayOption }: UserListProps) {
  const dispatch = useDispatch();
  const list = {
    all: users,
    favorites,
  };
  const isFavorite = (userId: number) =>
    favorites.some((favorite) => favorite.id === userId);

  function addToFavorite(user: User) {
    dispatch(toggleFavorite(user));
  }

  if (list[displayOption].length <= 0) {
    return <p>Nenhum usuário foi encontrado...</p>;
  }

  return (
    <>
      {list[displayOption].map((user: User) => (
        <S.CardShape key={user.id}>
          <S.CardHeader>
            <S.Avatar>{getInitalNameLetter(user.name)}</S.Avatar>
            <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </S.CardHeader>
          <S.CompanyText>
            Company: <span>{user.company.name}</span>
          </S.CompanyText>
          <S.CardActions>
            <Link to={`/usuarios/${user.id}`}>
              <Button>
                <FaClipboardList />
                Detalhes
              </Button>
            </Link>
            <FavoriteButton
              user={user}
              addToFavorite={addToFavorite}
              isFavorite={isFavorite(user.id)}
            />
          </S.CardActions>
        </S.CardShape>
      ))}
    </>
  );
}
