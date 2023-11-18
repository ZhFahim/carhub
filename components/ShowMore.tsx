"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

interface ShowMoreProps {
  page: number;
  hasNext: boolean;
}

const ShowMore = ({ page, hasNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const limit = (page + 1) * 9;

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("limit", limit.toString());
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!hasNext && (
        <Button
          type="button"
          title="Show More"
          containerStyle="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
