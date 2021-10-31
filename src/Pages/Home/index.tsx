import { useEffect, useState } from "react";
import { UseProducts } from "../../Providers/Products";
import { UseSignIn } from "../../Providers/SignIn";

export const HomePage = () => { 
  const [token] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });

  const [username] = useState(() => {
    const current = localStorage.getItem("username") || "";
    return JSON.parse(current);
  });


  const { signOut } = UseSignIn();
  const { getProducts, productsList } = UseProducts();

  useEffect(() => {
    getProducts(token);
  });

  return (
    <div>
      <h3>Olá {username}</h3>
      <div>{
          productsList.map( item => <p key={item.id}>{item.name}</p>)
          }</div>
      <button onClick={signOut}>Sair</button>
    </div>
  );
};
