import { LoginProvider } from './loginContext';
import { UserProvider } from './userContext';
import { CompanyProvider } from './companyContext';
import { ResiduesProvider } from './residuesContext';

function Providers({ children }) {
  return (
    <LoginProvider>
      <ResiduesProvider>
        <CompanyProvider>
          <UserProvider>{children}</UserProvider>
        </CompanyProvider>
      </ResiduesProvider>
    </LoginProvider>
  );
}

export default Providers;
