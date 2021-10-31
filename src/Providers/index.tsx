import { IProvidersProps } from "../Interfaces/ProvidersProps";
import { ProductsProviders } from "./Products";
import { RegisterProvider } from "./Register";
import { SignInProvider } from "./SignIn";

const Providers = ({ children }: IProvidersProps) => {
  return (
    <RegisterProvider>
      <SignInProvider>
        <ProductsProviders>
            {children}
        </ProductsProviders>
      </SignInProvider>
    </RegisterProvider>
  );
};

export default Providers;
