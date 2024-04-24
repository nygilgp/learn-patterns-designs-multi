import { includeUser } from './components/include-user';
import { logProps } from './components/log-props';
import { UserInfoForm } from './components/user-form';
import { UserInfo } from './components/user-info';

const UserInfoWrapper = logProps(UserInfo);
const IncludeUserWrapper = includeUser(UserInfoWrapper, 2);
function App() {
  return (
    <>
      <IncludeUserWrapper />
      <UserInfoForm />
    </>
  );
}

export default App;
