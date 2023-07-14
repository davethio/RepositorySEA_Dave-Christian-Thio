export default function Footer() {
  return (
    <div className="min-h-[120px] bg-white flex flex-col justify-center gap-2 p-4">
      <p className="text-xs lg:text-sm">
        Website, Website Design, and Website Code &#169; 2023 Dave Christian Thio. Nearly all names, images,
        and information related to the movies are sourced from{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://seleksi-sea-2023.vercel.app/api/movies"
          className="hover:text-blue-700 underline"
        >
          Seleksi Sea
        </a>{" "}
        (https://seleksi-sea-2023.vercel.app/api/movies).
      </p>
    </div>
  );
}
