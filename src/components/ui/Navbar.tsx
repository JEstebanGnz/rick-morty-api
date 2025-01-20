import Link from "next/link";

export const Navbar = () => {

  return (
    <nav className="flex px-5 justify-between w-full mb-5 bg-yellow-400 py-5 rounded-md shadow-md">
      <div>
        <Link href="/">
          <span className={`font-bold antialiased`}> Rick and Morty API </span>
        </Link>
      </div>
      
      <div className="hidden sm:block">
        <Link
          href="/analyze"
          className="p-2 m-2 hover:bg-yellow-300 rounded-md transition-all font-bold"
        >
          Data Analysis
        </Link>
      </div>
    </nav>
  );
};
