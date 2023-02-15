function Card(props) {
  const { imgSrc, href, imgAlt } = props;

  return (
    <div className="flex justify-center p-8">
      <a href={href}>
        <div className="flex flex-col p-8 justify-center border border-gray-200 rounded-md shadox-xl">
          <img className="absolute inset-x-0 w-80" src={imgSrc} alt={imgAlt} />
        </div>
      </a>
    </div>
  );
}

export default Card;
