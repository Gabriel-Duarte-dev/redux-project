import type { User } from "../../stores/users/types";
import { Button } from "../../styleds/Button.styled";
import { FaClipboardList, FaStar, FaTrash } from "react-icons/fa";
import * as S from "./UserList.styled";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../stores/users/users-slice";
import { getInitalNameLetter } from "../../utils/getInitalNameLetter";

interface UserListProps {
  users: User[] | [];
  favorites: User[] | [];
  displayOption: "all" | "favorites";
  setSelectedUser: (user: User) => void;
}

export function UserList({
  users,
  favorites,
  displayOption,
  setSelectedUser,
}: UserListProps) {
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
            <Button onClick={() => setSelectedUser(user)}>
              <FaClipboardList />
              Detalhes
            </Button>
            <Button
              $variant={isFavorite(user.id) ? "alert" : "primary"}
              onClick={() => addToFavorite(user)}
            >
              {isFavorite(user.id) ? (
                <>
                  <FaTrash />
                  Remover dos favoritos
                </>
              ) : (
                <>
                  <FaStar />
                  Adicionar aos favoritos
                </>
              )}
            </Button>
          </S.CardActions>
        </S.CardShape>
      ))}
    </>
  );
}
