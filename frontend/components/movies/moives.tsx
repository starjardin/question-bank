import Link from "next/link";

export default function Movies({ movies }: any) {
  return (
    <>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul role="list" className="divide-y divide-gray-200">
        {movies.map((movie:any, idx: number) => (
          <li key={idx} className="py-4">
            <h2>Title: {movie.title}</h2>
            <h3>Metacritic: {movie.metacritic}</h3>
            <p>Plot: {movie.plot}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Link href={"/movies/add"} passHref>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center"
          >
            Add movies
          </button>
        </Link>
      </div>
    </>
  );
}
