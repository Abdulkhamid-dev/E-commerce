import { collection } from "firebase/firestore"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { db } from "./firebase/firebase-config"
import { getCardlist } from "./store/cards/actions"
import { getWisheslist } from "./store/wishes/actions"








<></>

const {auth, wishes, cards,} = store
const store = useSelector(state => state)
const dispatch = useDispatch()
const wishesCollectionRef = collection(db, "wishes")
const cardsCollectionRef = collection(db, "card")




export const getWishes = async () => {
  const data = await getDocs(wishesCollectionRef);
  const allWishes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  const filteredWishes = allWishes.filter(
    (wish) => wish.token === store?.auth?.token
  );
  dispatch(getWisheslist(filteredWishes));
};
export const getCards = async () => {
  const data = await getDocs(cardsCollectionRef);
  const allcards = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  const filteredCard = allcards.filter(
    (wish) => wish.cardData.token === auth?.token
  );
  dispatch(getCardlist(filteredCard));
};
