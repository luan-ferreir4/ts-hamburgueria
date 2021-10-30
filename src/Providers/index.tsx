import { IProvidersProps } from "../Interfaces/ProvidersProps";
import { RegisterProvider } from "./Register";
import { SignInProvider } from "./SignIn";

const Providers = ({ children }: IProvidersProps) => {
  return (
    <RegisterProvider>
      <SignInProvider>{children}</SignInProvider>
    </RegisterProvider>
  );
};

export default Providers;
