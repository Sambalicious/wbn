import HomePage from "@/components/page/Home";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Chistore. Everything about e-commerce products"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            style={{ color: "red", margin: "2rem auto", padding: "4px 15px" }}
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: { productId: 12, quantity: 10 },
              })
            }
            className={inter.className}
          >
            Add to cart
          </button>

          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Empty cart{" "}
          </button>
          <button
            onClick={() =>
              dispatch({ type: "DELETE_FROM_CART", payload: { productId: 12 } })
            }
          >
            Remove from cart
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "UPDATE_QUANTITY",
                payload: { productId: 12, quantity: -1 },
              })
            }
          >
            update quantity
          </button>
        </div>
      </main> */}

      <HomePage />
    </>
  );
}
