import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../stores/users/users-slice";
import { HeaderSearch } from "../components/HeaderSearch";
import { Container } from "../styleds/Container.styled";
import { UserList } from "../components/UserList";
import { useFilter } from "../hooks/useFilter";
import { useAppSelector } from "../hooks/useAppSelector";
import type { User } from "../stores/users/types";
import { UserDetails } from "../components/UserDetails";
import { CardSkeleton } from "../components/CardSkeleton";

export function Home() {
  const [displayOption, setDisplayOption] = useState<"all" | "favorites">(
    "all"
  );
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { users, favorites, filter, setFilter } = useFilter();
  const { loading } = useAppSelector((state) => state.users);
  const dispatch = useDispatch();

  function handleClose() {
    setSelectedUser(null);
  }

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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Array.from({ length: 5 }).map((_) => <CardSkeleton />)
      ) : (
        <UserList
          users={users}
          favorites={favorites}
          displayOption={displayOption}
          setSelectedUser={setSelectedUser}
        />
      )}

      {selectedUser !== null && (
        <UserDetails user={selectedUser} onClose={handleClose} />
      )}
    </Container>
  );
}
