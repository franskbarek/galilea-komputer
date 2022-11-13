import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Router } from "next/router";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { runFireWorks } from "../lib/utils";

export default function success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  //   const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Terimakasih sudah berbelanja!</h2>
        <p className="email-msg">Cek email anda untuk menerima receipt permbayaran.</p>
        <p className="description">
          Jika ada pertanyaan, silahkan kirimkan email ke
          <a className="email" href="mailto:franzferdinand.kbarek@gmail.com">
            galileakomputer@mail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn" width="300px">
            Lanjut belanja
          </button>
        </Link>
      </div>
    </div>
  );
}
