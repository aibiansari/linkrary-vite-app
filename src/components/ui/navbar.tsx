const Navbar = () => {
  return (
    <div className="w-full h-16 fixed flex gap-32 items-center justify-around bg-neutral-900 text-white">
      <h1 className="font-Raleway  text-2xl font-bold italic">Linkrary</h1>
      <p>Search</p>
      <div className="flex gap-8">
        <p>Github Repo</p>
        <p>Saved</p>
        <p>Menu</p>
      </div>
    </div>
  );
};

export default Navbar;
