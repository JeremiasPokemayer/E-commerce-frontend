import useSWR from "swr";
import useSWRinmutable from "swr/immutable";
import { fetchApi } from "lib/api";

export function useMe(id) {
  const { data } = useSWRinmutable("/me?id=" + id, fetchApi);
  return data;
}

// export function useProduct(id: any) {
//   const { data, error } = useSWRinmutable(`/products?id=${id}`, fetchApi);
//   return data;
// }

export function useProductId(id) {
  const { data } = useSWR(() => "/products?id=" + id, fetchApi);
  return data;
}

export function useSearchResults(query) {
  const { data } = useSWR(() => "/search?q=" + query, fetchApi);
  return data;
}

export function useTopResults() {
  const { data } = useSWR(() => "/search?q=chair&offset=2&limit=2", fetchApi);
  return data;
}
