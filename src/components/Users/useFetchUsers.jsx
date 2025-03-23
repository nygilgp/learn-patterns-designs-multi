import { fetchUser } from '../../api/userApi';
import { useApi } from '../../api/hooks/useApi';

const useFetchUsers = () => {
  const {
    data: users,
    exec: initFetchUsers,
    status: fetchUsersStatus,
    isIdle: isFetchUsersStatusIdle,
    isPending: isFetchUsersStatusPending,
    isError: isFetchUsersStatusError,
    isSuccess: isFetchUsersStatusSuccess,
  } = useApi(() => fetchUser().then((response) => response.data));
  return {
    users,
    fetchUsersStatus,
    initFetchUsers,
    isFetchUsersStatusIdle,
    isFetchUsersStatusPending,
    isFetchUsersStatusError,
    isFetchUsersStatusSuccess,
  };
};

export default useFetchUsers;
