import { React } from 'react';
import { Link } from 'react-router-dom';

export default function RenderList({ list }) {
  const lists = list.map((rescue) => {
    const { happenDate, imgUrl, _id, careNm } = rescue;

    return (
      <article
        key={_id}
        className="inline-block shadow-lg rounded-lg overflow-hidden h-90 w-80 md:w-96 cursor-pointer m-3"
      >
        <Link
          to={`/frontend/rescue/${_id}`}
          className="w-full overflow-hidden block h-full"
        >
          <img
            src={imgUrl}
            className="h-64 w-full object-cover"
            alt="rescued animal"
          />
          <section className="flex flex-col justify-center font-normal p-2 md:h-40 text-base">
            <div>{happenDate}</div>
            <div>{careNm}</div>
          </section>
        </Link>
      </article>
    );
  });
  return lists;
}
