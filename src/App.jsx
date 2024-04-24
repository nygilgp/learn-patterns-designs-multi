import { logProps } from './components/log-props';
import { UserInfo } from './components/user-info';

const UserInfoWrapper = logProps(UserInfo);
function App() {
  return (
    <>
      <UserInfoWrapper test={'test'} a="some text to check" b="values" />
    </>
  );
}

export default App;
