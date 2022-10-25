import { React } from 'react';
import { Link } from 'react-router-dom';

export default function RenderList({ list }) {
  const lists = list.map((rescue) => {
    const { happenDt, imageUrl, desertionNo, careNm } = rescue;

    return (
      <article
        key={desertionNo}
        className="inline-block shadow-lg rounded-lg overflow-hidden h-90 w-80 md:w-96 cursor-pointer m-3"
      >
        <Link
          to={`${process.env.PUBLIC_URL}/rescue/${desertionNo}`}
          className="w-full overflow-hidden block h-full"
        >
          <img
            src={imageUrl}
            className="h-64 w-full object-cover"
            alt="rescued animal"
          />
          <section className="flex flex-col justify-center font-normal p-2 md:h-40 text-base">
            <div>{happenDt}</div>
            <div>{careNm}</div>
          </section>
        </Link>
      </article>
    );
  });
  return lists;
}
