const badges = {
  color: {
    gray: "bg-gray-400",
    blue: "bg-blue-400",
    light: "bg-grey-200",
  },
  size: {
    small: "text-sm",
    medium: "text-md",
    large: "text-lg",
  },
};

function Badge(props) {
  const { title, color, size, icon } = props;

  const colorClass = badges.color[color];
  const sizeClass = badges.size[size];

  return (
    <div
      className={`flex flex-col py-2 items-center justify-center rounded-full p-3 shadow-lg ${colorClass} ${sizeClass}`}
    >
      {title} {icon}
    </div>
  );
}

export default Badge;
