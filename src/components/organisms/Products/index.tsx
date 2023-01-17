import { Modal, PageLoader } from "@/components/atoms";
import { EmptyState, HomeItem, ProductDetails } from "@/components/molecules";
import { PageLayout } from "@/components/template";
import { useGetProducts } from "@/hooks/index";
import { ICart } from "@/types/index";
import { useState } from "react";
import { useAppState } from "store/context";
import { TProducts } from "store/types";
import styles from "./Products.module.scss";

export const Products = () => {
  const { dispatch } = useAppState();
  // const [searchQuery, setSearchQuery] = useState("");
  const { products, isLoading } = useGetProducts();
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [activeProduct, setActiveProduct] = useState<TProducts>();

  const handleAddToCart = (data: ICart) => {
    setQuantity(prevQuantity => prevQuantity + 1);
    dispatch({ type: "ADD_TO_CART", payload: data });
  };

  const handleDecreaseQuantity = (id: number) => {
    if (quantity < 1) return;
    setQuantity(prevQuantity => prevQuantity - 1);
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: quantity - 1 },
    });
  };

  const handleDeleteItem = (id: number) => {
    dispatch({ type: "DELETE_FROM_CART", payload: { id } });
  };

  const handleSaveForLater = (id: number) => {
    dispatch({ type: "SAVE_FOR_LATER", payload: { id } });
  };

  const handleView = (product: TProducts) => {
    setActiveProduct(product);
    setOpenModal(!openModal);
  };

  // const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value);
  // };

  return (
    <PageLayout subTitle={"Browse our list of products"}>
      <section className={styles.products}>
        {/* <ProductSearch value={searchQuery} onChange={handleSearchChange} /> */}
        <div className={styles.products__item}>
          {isLoading ? (
            <PageLoader />
          ) : (
            products?.length > 0 &&
            products?.map(product => (
              <div key={product.id}>
                <HomeItem
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  quantity={selectedQuantity}
                  id={product.id}
                  addToCart={() =>
                    handleAddToCart({
                      quantity: 1,
                      id: product.id,
                    })
                  }
                  setQuantity={el => setSelectedQuantity(el)}
                  handleView={() => handleView(product)}
                />
              </div>
            ))
          )}
        </div>
        {!products && <EmptyState text="No product found" />}

        <Modal isOpen={openModal} onClose={() => setOpenModal(!openModal)}>
          <div>
            <ProductDetails
              description={"lorem Ips"}
              productName={activeProduct?.title!}
              price={activeProduct?.price!}
              image={activeProduct?.image!}
              setSelectedQuantity={setSelectedQuantity}
              seller={activeProduct?.title!}
              deleteItem={() => handleDeleteItem(activeProduct?.id!)}
              saveForLater={() => handleSaveForLater(activeProduct?.id!)}
              decreaseQuantity={() =>
                handleDecreaseQuantity(activeProduct?.id!)
              }
              addQuantity={() =>
                handleAddToCart({
                  quantity: 1,
                  id: activeProduct?.id!,
                })
              }
              id={activeProduct?.id!}
            />
          </div>
        </Modal>
      </section>
    </PageLayout>
  );
};
