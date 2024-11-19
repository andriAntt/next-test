import { Film } from "@/types/type";
import Image from "next/image";

import notFound from "../../assets/image/not-found/image_not_found.webp";
import Link from "next/link";

type Props = {
  filmsData: Film[];
};

const FilmList = ({ filmsData }: Props) => {
  return (
    <ul className="px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-16">
      {filmsData.reverse().map((film) => {
        const { id, name, created, preview, genres } = film;

        return (
          <li
            key={id}
            className="max-w-[350px] h-[500px] w-full items-center justify-self-center transition-all duration-300 rounded-xl"
          >
            <Link href={`/${id}`} className="w-full h-full flex flex-col">
              {preview !== undefined || preview !== null ? (
                // use tag img because you can add any link to image and tag Image not working
                <img
                  src={preview}
                  alt={name}
                  className="w-full h-[350px] object-fill rounded-xl"
                />
              ) : (
                <Image
                  className="w-full h-[350px] object-cover rounded-xl"
                  src={notFound}
                  alt={"image not found"}
                />
              )}
              <h2 className="text-2xl mt-2 text-center capitalize">{name}</h2>

              <div className="px-4">
                <span className="text-base">Genres:</span>
                <ul className="flex gap-2 flex-wrap text-gray-500">
                  {genres && genres.length > 0 ? (
                    genres.map((genre) => (
                      <li key={genre} className="">
                        {genre} |
                      </li>
                    ))
                  ) : (
                    <li className="text-sm">Genres not found</li>
                  )}
                </ul>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FilmList;
