"use client";

import CinemaServices from "@/services/CinemaServices";

import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const { postOneFilm } = CinemaServices();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showForm]);

  async function onSubmit(values: FieldValues) {
    const trasformData = {
      id: uuidv4(),
      name: values.name,
      created: values.created,
      preview: values.preview,
      genres: values.genre.split(","),
      photo: values.photo,
      description: values.description,
    };

    try {
      const req = await postOneFilm(JSON.stringify(trasformData));

      setShowForm(false);
      router.refresh();
    } catch (e) {
      throw new Error();
    }

    setValue("name", "");
    setValue("created", "");
    setValue("preview", "");
    setValue("genres", "");
    setValue("photo", "");
    setValue("description", "");
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setShowForm(true)}
      >
        Add film
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-500/[.8] transition-all duration-300 ${
          showForm ? "scale-100" : "scale-0"
        }`}
      >
        <form
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded p-4 pt-10 flex flex-col"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <span
            className="text-3xl mb-5 cursor-pointer absolute right-2 top-1"
            onClick={() => setShowForm(false)}
          >
            &times;
          </span>
          <div className="mb-4 relative">
            <input
              id="name"
              placeholder="Film name"
              className="w-full outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("name", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            />
            <p className="absolute text-xs text-red-600 -bottom-5">
              {errors.name &&
                errors.name.message &&
                errors.name.message.toString()}
            </p>
          </div>

          <div className="mb-4 relative">
            <input
              id="created"
              placeholder="Film year created"
              className="w-full outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("created", {
                maxLength: { value: 4, message: "Max length should be 4" },
                minLength: { value: 3, message: "Minimum length should be 4" },
              })}
            />
            <p className="absolute text-xs text-red-600 -bottom-5">
              {errors.name &&
                errors.name.message &&
                errors.name.message.toString()}
            </p>
          </div>

          <div className="mb-4 relative">
            <input
              id="genre"
              placeholder="Film genres"
              className="w-full outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("genre", {
                required: "This is required",
                minLength: { value: 1, message: "Minimum one genere" },
              })}
            />
            <p className="text-xs">Please use {'","'} for split genres</p>
            <p className="absolute text-xs text-red-600 -bottom-5">
              {errors.genre &&
                errors.genre.message &&
                String(errors.genre.message)}
            </p>
          </div>

          <div className="mb-4 relative">
            <textarea
              id="description"
              placeholder="Film description"
              rows={6}
              className=" resize-none w-full outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("description", {})}
            />
          </div>

          <div className="mb-6 relative">
            <input
              id="photo"
              placeholder="Film preview"
              className="w-full outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("photo", {
                required: "This field is required",
                pattern: {
                  value:
                    /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(\/\S*)?$/,
                  message: "Please enter a valid URL",
                },
              })}
            />

            <p className="absolute text-xs text-red-600 -bottom-5">
              {errors.photo &&
                errors.photo.message &&
                String(errors.photo.message)}
            </p>
          </div>

          <button
            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            disabled={isSubmitting}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
