import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import SideMenu from "@/app/components/MenuComponents/SideMenu";
import SearchMenu from "../components/SearchMenuComponent/SearchMenu";
import ProductTagMenu from "../components/PDP/ProductTagMenu";
import FavoriteSideMenu from "../components/FavoritesMenu/FavoriteSideMenu";
import { SampleProduct, TestProducts } from "./ExtraInfo";
import ShoppingCartMenu from "../components/ShoppingCartMenu/ShoppingCartMenu";

type MenuProviderProps = {
  children: ReactNode;
};

type SliderMenuContext = {
  isMenuOpen: boolean;
  handleMenuToggler: () => void;
  isSearchMenuOpen: boolean;
  handleSearchMenuToggler: () => void;
  isInsideMenuOpen: number | null;
  setIsInsideMenuOpen: React.Dispatch<React.SetStateAction<number | null>>;
  isProductTagMenuOpen: boolean;
  isFavoriteMenuOpen: boolean;
  handleFavoriteMenuToggler: () => void;
  isShoppingCartMenuOpen: boolean;
  handleShoppingCartMenuToggler: () => void;
  handleTagText: (id: number) => void;
  handleProductTagMenuToggler: () => void;
  productTagText: number | null;
  handleMenuClick: (id: number) => void;
  choosenLanguage: string | undefined;
  setChoosenLanguage: React.Dispatch<React.SetStateAction<string | undefined>>;
  choosenCurrency: CountryCurrency;
  products: SampleProduct[];
  toggleFavoriteMarked: (id: number) => void;
  favoriteItems: SampleProduct[];
  setFavoriteItems: Dispatch<SetStateAction<SampleProduct[]>>;
  setChoosenCurrency: React.Dispatch<React.SetStateAction<CountryCurrency>>;
  selectLanguage: (language: string) => void;
  selectCurrency: (selectedCountry: string, selectedCurrency: string) => void;
  addToCartFromFavorites: (product: SampleProduct) => void;
  shoppingCartItems: CartItem[];
  addToCart: (product: SampleProduct) => void;
  decrementItemFromCart: (id: number) => void;
  incrementItemFromCart: (id: number) => void;
  addAllToCartFromFavorites: (products: SampleProduct[]) => void;
};

type CountryCurrency = {
  country: string | undefined;
  currency: string | undefined;
};

export type CartItem = {
  itemId: number;
  itemName: string;
  itemDescription: string;
  itemImage: string;
  itemPrice: number;
  itemColor: string;
  itemUrl: string;
  itemQuantity: number;
};

const SliderMenuContext = createContext({} as SliderMenuContext);

export function useMenuSlider() {
  return useContext(SliderMenuContext);
}

export function SliderMenuProvider({ children }: MenuProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isInsideMenuOpen, setIsInsideMenuOpen] = useState<number | null>(null);
  const [isProductTagMenuOpen, setIsProductTagMenuOpen] = useState(false);
  const [isFavoriteMenuOpen, setIsFavoriteMenuOpen] = useState(false);
  const [isShoppingCartMenuOpen, setIsShoppingCartMenuOpen] = useState(false);
  const [productTagText, setProductTagText] = useState<number | null>(null);
  const [choosenLanguage, setChoosenLanguage] = useState<string | undefined>(
    undefined
  );
  const [choosenCurrency, setChoosenCurrency] = useState<CountryCurrency>({
    country: undefined,
    currency: undefined,
  });

  const [shoppingCartItems, setShoppingCartItems] = useState<CartItem[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<SampleProduct[]>([]);
  const [products, setProducts] = useState<SampleProduct[]>(TestProducts);

  useEffect(() => {
    // const localStorageArray = JSON.stringify(localStorage.getItem("cart"));

    // console.log(localStorageArray);

    // localStorageArray;

    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }

    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }

    const favoritesLocalStorage = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const updatedProducts = products.map((product) => ({
      ...product,
      itemLiked: favoritesLocalStorage.some(
        (item: SampleProduct) => item.itemId === product.itemId
      ),
    }));

    setShoppingCartItems(cartLocalStorage);
    setFavoriteItems(favoritesLocalStorage);
    setProducts(updatedProducts);
  }, []);

  const toggleFavoriteMarked = (productId: number) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.itemId === productId
          ? { ...product, itemLiked: !product.itemLiked }
          : product
      );

      const likedProducts = updatedProducts.filter(
        (product) => product.itemLiked
      );
      localStorage.setItem("favorites", JSON.stringify(likedProducts));
      setFavoriteItems(likedProducts);
      return updatedProducts;
    });
  };

  const addAllToCartFromFavorites = (sampleProducts: SampleProduct[]) => {
    const favoriteItems: CartItem[] = sampleProducts.map((item) => {
      const favoriteCartItem: CartItem = {
        itemId: item.itemId,
        itemName: item.itemName,
        itemDescription: item.itemDescription,
        itemImage: item.itemImage,
        itemPrice: item.itemPrice,
        itemColor: item.itemColor,
        itemUrl: item.itemUrl,
        itemQuantity: 1,
      };
      return favoriteCartItem;
    });

    console.log(favoriteItems);

    // setShoppingCartItems((currItems) => {
    //   const mergedItems = [...currItems, ...favoriteItems];
    //   localStorage.setItem("cart", JSON.stringify(mergedItems));
    //   return mergedItems;
    // });

    setShoppingCartItems((currItems) => {
      const mergedItems = [...currItems];
      favoriteItems.forEach((favoriteItem) => {
        const existingItemIndex = mergedItems.findIndex(
          (item) => item.itemId === favoriteItem.itemId
        );
        if (existingItemIndex !== -1) {
          mergedItems[existingItemIndex].itemQuantity +=
            favoriteItem.itemQuantity;
        } else {
          mergedItems.push(favoriteItem);
        }
      });

      setFavoriteItems([]);
      localStorage.setItem("cart", JSON.stringify(mergedItems));
      localStorage.setItem("favorites", JSON.stringify([]));

      const updatedProducts = products.map((product) => ({
        ...product,
        itemLiked: mergedItems.some((item) => item.itemId === product.itemId)
          ? false
          : product.itemLiked,
      }));
      setProducts(updatedProducts);

      return mergedItems;
    });

    // setShoppingCartItems((currItems) => {
    //   currItems.forEach((item) => {
    //     const favoriteCartItem = favoriteItems.find(
    //       (i) => i.itemId === item.itemId
    //     );
    //     // console.log("FavoriteCartItem: ", favoriteCartItem);
    //     if (favoriteCartItem) {
    //       item.itemQuantity += favoriteCartItem.itemQuantity;
    //     }

    //     const mergedFavorites = favoriteItems.filter(
    //       (i) => i.itemId !== item.itemId
    //     );
    //     const newCartArray = [...currItems, mergedFavorites];
    //     localStorage.setItem("cart", JSON.stringify(newCartArray));
    //   });
    //   return currItems;
    // });
  };

  const addToCartFromFavorites = (product: SampleProduct) => {
    const cartItem: CartItem = {
      itemId: product.itemId,
      itemName: product.itemName,
      itemDescription: product.itemDescription,
      itemImage: product.itemImage,
      itemPrice: product.itemPrice,
      itemColor: product.itemColor,
      itemUrl: product.itemUrl,
      itemQuantity: 1,
    };

    setShoppingCartItems((currItems) => {
      const existingItem = currItems.find(
        (item) => item.itemId === cartItem.itemId
      );

      const removedFavorite = favoriteItems.filter(
        (item) => item.itemId !== cartItem.itemId
      );
      setFavoriteItems(removedFavorite);
      localStorage.setItem("favorites", JSON.stringify(removedFavorite));

      setProducts((prevProducts) => {
        return prevProducts.map((product) =>
          product.itemId === cartItem.itemId
            ? { ...product, itemLiked: false }
            : product
        );
      });

      if (!existingItem) {
        const newItem = [...currItems, cartItem];
        localStorage.setItem("cart", JSON.stringify(newItem));
        return newItem;
      } else {
        const updatedItem = currItems.map((item) =>
          item.itemId === cartItem.itemId
            ? { ...item, itemQuantity: item.itemQuantity + 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedItem));
        return updatedItem;
      }
    });
  };

  const addToCart = (product: SampleProduct) => {
    const cartItem: CartItem = {
      itemId: product.itemId,
      itemName: product.itemName,
      itemDescription: product.itemDescription,
      itemImage: product.itemImage,
      itemPrice: product.itemPrice,
      itemColor: product.itemColor,
      itemUrl: product.itemUrl,
      itemQuantity: 1,
    };
    setShoppingCartItems((currItems) => {
      const existingItem = currItems.find(
        (item) => item.itemId === cartItem.itemId
      );

      if (!existingItem) {
        const newItem = [...currItems, cartItem];
        localStorage.setItem("cart", JSON.stringify(newItem));
        return newItem;
      } else {
        const updatedItem = currItems.map((item) =>
          item.itemId === cartItem.itemId
            ? { ...item, itemQuantity: item.itemQuantity + 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedItem));
        return updatedItem;
      }
    });
  };

  const decrementItemFromCart = (id: number) => {
    setShoppingCartItems((currItems) => {
      const existingItem = currItems.find(
        (item) => item.itemId === id && item.itemQuantity > 1
      );

      if (existingItem) {
        const reducedQuantity = currItems.map((item) =>
          item.itemId === id
            ? { ...item, itemQuantity: item.itemQuantity - 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(reducedQuantity));
        return reducedQuantity;
      } else {
        const removedProduct = currItems.filter((item) => item.itemId !== id);
        localStorage.setItem("cart", JSON.stringify(removedProduct));
        return removedProduct;
      }
    });
  };

  const incrementItemFromCart = (id: number) => {
    setShoppingCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.itemId === id);

      if (existingItem) {
        const increasedQuantity = currItems.map((item) =>
          item.itemId === id
            ? { ...item, itemQuantity: item.itemQuantity + 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(increasedQuantity));
        return increasedQuantity;
      } else {
        return currItems;
      }
    });
  };

  const handleFavoriteMenuToggler = () => {
    setIsFavoriteMenuOpen(!isFavoriteMenuOpen);
    setIsMenuOpen(false);
  };

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchMenuToggler = () => {
    setIsSearchMenuOpen(!isSearchMenuOpen);
    setIsMenuOpen(false);
  };

  const handleShoppingCartMenuToggler = () => {
    setIsShoppingCartMenuOpen(!isShoppingCartMenuOpen);
    setIsMenuOpen(false);
  };

  const handleTagText = (id: number) => {
    setProductTagText(id);
  };

  const handleProductTagMenuToggler = () => {
    setIsProductTagMenuOpen(!isProductTagMenuOpen);
  };

  const handleMenuClick = (id: number) => {
    isInsideMenuOpen === id
      ? setIsInsideMenuOpen(null)
      : setIsInsideMenuOpen(id);
  };

  const selectLanguage = (language: string) => {
    if (choosenLanguage === "Swedish") {
      setChoosenLanguage(undefined);
      setIsInsideMenuOpen(null);
    } else {
      setChoosenLanguage(language);
      setIsInsideMenuOpen(null);
    }
  };

  const selectCurrency = (
    selectedCountry: string,
    selectedCurrency: string
  ) => {
    if (choosenCurrency.country === "Swedish") {
      setChoosenCurrency({
        country: undefined,
        currency: undefined,
      });
      setIsInsideMenuOpen(null);
    } else {
      setChoosenCurrency({
        country: selectedCountry,
        currency: selectedCurrency,
      });
      setIsInsideMenuOpen(null);
    }
  };

  return (
    <SliderMenuContext.Provider
      value={{
        isMenuOpen,
        handleMenuToggler,
        isSearchMenuOpen,
        handleSearchMenuToggler,
        isInsideMenuOpen,
        setIsInsideMenuOpen,
        isProductTagMenuOpen,
        isFavoriteMenuOpen,
        handleFavoriteMenuToggler,
        isShoppingCartMenuOpen,
        handleShoppingCartMenuToggler,
        handleTagText,
        handleProductTagMenuToggler,
        productTagText,
        handleMenuClick,
        choosenLanguage,
        setChoosenLanguage,
        choosenCurrency,
        products,
        toggleFavoriteMarked,
        favoriteItems,
        setFavoriteItems,
        setChoosenCurrency,
        selectLanguage,
        selectCurrency,
        addToCartFromFavorites,
        shoppingCartItems,
        addToCart,
        decrementItemFromCart,
        incrementItemFromCart,
        addAllToCartFromFavorites,
      }}
    >
      {children}
      <SideMenu />
      <SearchMenu />
      <ProductTagMenu />
      <FavoriteSideMenu />
      <ShoppingCartMenu />
    </SliderMenuContext.Provider>
  );
}
