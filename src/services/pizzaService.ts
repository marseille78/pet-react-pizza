import { db } from "../firebase";
import { ref, get } from "firebase/database";

class PizzaService {
  getResource = async () => {
    const dbRef = ref(db, "listItems");

    try {
      const res = await get(dbRef);

      if (res.exists()) {
        return res.val();
      } else {
        return new Error("There is no data");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        return err;
      }
      return new Error("Unknown error");
    }
  };
}

export const pizzaService = new PizzaService();
