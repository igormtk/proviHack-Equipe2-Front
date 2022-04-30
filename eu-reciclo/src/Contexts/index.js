import { LoginProvider } from './loginContext';
import { UserProvider } from './userContext';
import { CompanyProvider } from './companyContext';

function Providers({ children }) {
  return (
    <LoginProvider>
      <CompanyProvider>
        <UserProvider>{children}</UserProvider>
      </CompanyProvider>
    </LoginProvider>
  );
}

export default Providers;
