import { useFilterButtonContext } from "@/contexts/FilterButtonContext";

const FilterModal = () => {
  const { buttonState } = useFilterButtonContext();

  return (
    <>
      {buttonState && (
        <div className="z-50 h-screen w-screen flex items-center justify-center bg-black">
          filterModal
        </div>
      )}
    </>
  );
};

export default FilterModal;
