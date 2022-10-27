import { React } from 'react';
import { Link } from 'react-router-dom';

export default function RenderList({ list }) {
  const lists = list.map((rescue) => {
    const { happenDt, imageUrl, desertionNo } = rescue;

    return (
      <article
        key={desertionNo}
        className="inline-block shadow-lg rounded-lg overflow-hidden h-90 cursor-pointer m-3"
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
          <section className="flex justify-center font-normal p-2 md:h-10 text-base bg-background">
            <span className="font-medium">{`${happenDt.slice(
              0,
              4,
            )}년 ${happenDt.slice(4, 6)}월 ${happenDt.slice(6)}일`}</span>
            에 구조되었어요.
          </section>
        </Link>
      </article>
    );
  });
  return lists;
}
