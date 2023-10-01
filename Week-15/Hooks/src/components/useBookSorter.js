import { useMemo } from "react";

function useBookSorter(books, sortBy) {
  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "author") {
        return a.author.localeCompare(b.author);
      } else if (sortBy === "year") {
        return a.year - b.year;
      }
      return 0;
    });
  }, [books, sortBy]);

  return sortedBooks;
}

export default useBookSorter;
