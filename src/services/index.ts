import { categoryServices } from "./categoryServices";
import { mailServices } from "./mailServices";
import { productServices } from "./productServices";
import { todoServices } from "./todoServices";

export const WEB_SERVICES = {
  Todo: todoServices,
  Product: productServices,
  Category: categoryServices,
  Mail: mailServices,
};
