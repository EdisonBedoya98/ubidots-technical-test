import HeartIcon from "@/assets/heart-fill.svg";
import { useFavoriteLaunch } from "@/hooks/hooks";

function Favorite({ id }: { id: string }) {
  const { isFavorite, updateFavoriteLaunch } = useFavoriteLaunch(id);

  return (
    <HeartIcon
      className={` ${
        isFavorite ? "text-red-600" : "text-white"
      } w-6 h-6 cursor-pointer duration-300`}
      onClick={() => updateFavoriteLaunch(id)}
    />
  );
}

export default Favorite;
