import SearchAutocomplete from "./SearchAutocomplete";
import { replies } from "@/lib/data";

export default function SearchForm() {
  return <SearchAutocomplete replies={replies} />;
}
