import CinemaServices from "@/services/CinemaServices";

import Image from "next/image";

import notFound from "../../assets/image/not-found/image_not_found.webp";
import { Film } from "@/types/type";

type Props = {
  params: {
    id: string;
  };
};

export default async function FilmPage({ params }: Props) {
  const { getOneFilm, getFilms } = CinemaServices();

  const film: Film = await getOneFilm(params.id);
  const films: Film[] = await getFilms();

  const { id, name, preview, created, genres, description } = film;

  return (
    <main className="flex flex-col px-5 py-16 gap-6">
      <div className="flex gap-6">
        {preview !== undefined || preview !== null ? (
          // use tag img because you can add any link to image and tag Image not working
          <img
            src={preview}
            alt={name}
            className="lg:max-w-[550px] w-full lg:h-[450px] h-[250px] object-fill rounded"
          />
        ) : (
          <Image
            className="lg:max-w-[550px] w-full lg:h-[450px] max-w-[250px] h-[350px] object-cover rounded"
            src={notFound}
            alt={"image not found"}
          />
        )}

        <div className="flex flex-col ">
          <h2 className="md:text-3xl text-xl font-bold mb-10">{name}</h2>
          <div className="mb-4">
            <span className="text-base">Genres:</span>
            <ul className="flex gap-2 text-gray-500">
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
          <p>
            {description && description.length > 0
              ? description
              : "This film don't has description"}
          </p>
        </div>
      </div>
    </main>
  );
}
