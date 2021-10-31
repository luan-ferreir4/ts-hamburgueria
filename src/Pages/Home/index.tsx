import { useEffect, useState } from "react";
import { Cart } from "../../Components/Cart";
import { ProductsList } from "../../Components/ProductsList";
import { UseProducts } from "../../Providers/Products";
import { UseSignIn } from "../../Providers/SignIn";
import { UseUser } from "../../Providers/User";

export const HomePage = () => {
 

  const { signOut } = UseSignIn();

  
  


  return (
    <div>
     <ProductsList/>
      <Cart/>
      <button onClick={signOut}>Sair</button>
    </div>
  );
};
