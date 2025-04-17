import React from 'react';
import { getImgUrl } from '../../utils/getImgUrl';
import { IoIosArrowBack, IoIosTrendingUp } from "react-icons/io";

const Bookcard = ({ book }) => {
  const isTrending = book?.title?.toLowerCase() === "relay";

  return (
    <div className="relative rounded-lg transition-shadow duration-300">
      {isTrending && (
        <IoIosTrendingUp className="absolute top-2 left-2 text-red-800 text-2xl" />
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt=""
            className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold hover:text-blue-600 mb-3 flex items-center">
            <IoIosArrowBack />
            {book?.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Bookcard;
