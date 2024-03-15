import { http, HttpResponse } from "msw";
import data from "./data";

export const handlers = [
  http.get("https://fakestoreapi.com/products", () => {
    return HttpResponse.json(data);
  }),
];
