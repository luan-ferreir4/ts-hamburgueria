import { useEffect, useState } from "react";

import { UseUser } from "../../Providers/User";
import { CartCard } from "../CartCard";

export const Cart = () => {
  const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return current;
  });

  const { userCart, getUserCart } = UseUser();

  useEffect(() => {
    getUserCart(parseInt(userId));
  }, [getUserCart, userId]);

  return (
    <div>
      <h4>Carrinho:</h4>
      <div>
        {userCart.map((item) => (
          <CartCard key={item.id} id={item.id} name={item.name} category={item.category} price={item.price}/>
        ))}
      </div>
    </div>
  );
};
