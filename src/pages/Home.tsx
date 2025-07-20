import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../stores/users/users-slice";
import { HeaderSearch } from "../components/HeaderSearch";
import { Container } from "../styleds/Container.styled";
import { UserList } from "../components/UserList";
import { useFilter } from "../hooks/useFilter";
import { useAppSelector } from "../hooks/useAppSelector";
import { CardSkeleton } from "../components/CardSkeleton";

export function Home() {
  const [displayOption, setDisplayOption] = useState<"all" | "favorites">(
    "all"
  );
  const { users, favorites, filter, setFilter } = useFilter();
  const { loading } = useAppSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container>
      <HeaderSearch
        filter={filter}
        setFilter={setFilter}
        displayOption={displayOption}
        setDisplayOption={setDisplayOption}
      />

      {loading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))
      ) : (
        <UserList
          users={users}
          favorites={favorites}
          displayOption={displayOption}
        />
      )}
    </Container>
  );
}
