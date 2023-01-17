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

  const handleDecreaseQuantity = (productId: number) => {
    if (quantity < 1) return;
    setQuantity(prevQuantity => prevQuantity - 1);
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, quantity: quantity - 1 },
    });
  };

  const handleDeleteItem = (productId: number) => {
    dispatch({ type: "DELETE_FROM_CART", payload: { productId } });
  };

  const handleSaveForLater = (productId: number) => {
    dispatch({ type: "SAVE_FOR_LATER", payload: { productId } });
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
              <div key={product.productId}>
                <HomeItem
                  key={product.productId}
                  title={product.productName}
                  price={product.senderFee}
                  image={product.img}
                  quantity={selectedQuantity}
                  productId={product.productId}
                  addToCart={() =>
                    handleAddToCart({
                      quantity: 1,
                      productId: product.productId,
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
              description={activeProduct?.description!}
              productName={activeProduct?.productName!}
              price={activeProduct?.senderFee!}
              image={activeProduct?.img!}
              setSelectedQuantity={setSelectedQuantity}
              seller={activeProduct?.productName!}
              deleteItem={() => handleDeleteItem(activeProduct?.productId!)}
              saveForLater={() => handleSaveForLater(activeProduct?.productId!)}
              decreaseQuantity={() =>
                handleDecreaseQuantity(activeProduct?.productId!)
              }
              addQuantity={() =>
                handleAddToCart({
                  quantity: 1,
                  productId: activeProduct?.productId!,
                })
              }
              productId={activeProduct?.productId!}
            />
          </div>
        </Modal>
      </section>
    </PageLayout>
  );
};
