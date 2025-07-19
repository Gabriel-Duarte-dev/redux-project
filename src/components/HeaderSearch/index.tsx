import { Input } from "../../styleds/Input.styled";
import * as S from "./HeaderSearch.styled";

interface HeaderSearchProps {
  filter: string;
  setFilter: (e: string) => void;
  displayOption: "all" | "favorites";
  setDisplayOption: React.Dispatch<React.SetStateAction<"all" | "favorites">>;
}

export function HeaderSearch({
  filter,
  setFilter,
  displayOption,
  setDisplayOption,
}: HeaderSearchProps) {
  return (
    <S.Header>
      <Input
        type="text"
        placeholder="Pesquisar usuário..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <form>
        <input
          checked={displayOption === "all"}
          onChange={(e) =>
            setDisplayOption(e.target.value as "all" | "favorites")
          }
          type="radio"
          id="all"
          value="all"
          name="filter-option"
        />
        <label htmlFor="all">Todos</label>

        <input
          checked={displayOption === "favorites"}
          onChange={(e) =>
            setDisplayOption(e.target.value as "all" | "favorites")
          }
          type="radio"
          id="favorites"
          value="favorites"
          name="filter-option"
        />
        <label htmlFor="favorites">Favoritos</label>
      </form>
    </S.Header>
  );
}
