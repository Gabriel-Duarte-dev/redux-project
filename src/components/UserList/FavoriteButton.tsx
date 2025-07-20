import { useState } from "react";
import { Button } from "../../styleds/Button.styled";
import { FaCheck, FaStar, FaTrash } from "react-icons/fa";
import type { User } from "../../stores/users/types";

interface FavoriteButtonProps {
  user: User;
  addToFavorite: (user: User) => void;
  isFavorite: boolean;
}

export function FavoriteButton({
  user,
  addToFavorite,
  isFavorite,
}: FavoriteButtonProps) {
  const [favorited, setFavorited] = useState(false);

  function handleClick(user: User) {
    setFavorited(true);

    setTimeout(() => {
      addToFavorite(user);
      setFavorited(false);
    }, 1000);
  }

  return (
    <Button
      $variant={isFavorite ? "alert" : "primary"}
      onClick={() => handleClick(user)}
    >
      {favorited ? (
        <span className="check">
          <FaCheck />
        </span>
      ) : isFavorite ? (
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
  );
}
