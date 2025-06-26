import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
  price?: number | null;
};
