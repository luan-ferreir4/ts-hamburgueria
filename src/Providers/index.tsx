import { IProvidersProps } from "../Interfaces/ProvidersProps";
import { ProductsProviders } from "./Products";
import { RegisterProvider } from "./Register";
import { SignInProvider } from "./SignIn";
import { UserProvider } from "./User";

const Providers = ({ children }: IProvidersProps) => {
  return (
    <RegisterProvider>
      <SignInProvider>
        <ProductsProviders>
          <UserProvider>
            {children}
          </UserProvider>
        </ProductsProviders>
      </SignInProvider>
    </RegisterProvider>
  );
};

export default Providers;
