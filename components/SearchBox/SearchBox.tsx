"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchFilm = searchParams.get("search-film");
  const [searchValue, setSearchValue] = useState(searchFilm || "");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    e.target.value.length > 0
      ? router.push(`/?search-film=${e.target.value}`)
      : router.push("/");
  };

  return (
    <div className="w-full">
      <input
        value={searchValue}
        onChange={(e) => handleChangeInput(e)}
        placeholder="Search film"
        className="w-full outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBox;
