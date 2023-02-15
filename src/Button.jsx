const styles = {
  color: {
    blue: "bg-blue-500 hover:bg-blue-600",
    delete: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
  },
  size: {
    small: "text-sm px-4 py-2",
    medium: "text-m px-4 py-2",
    large: "text-lg px-6 py-3",
  },
  disabled: "bg-gray-400",
};

export default function Button(props) {
  const { title, color, size, disabled } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];
  const disabledClass = disabled ? styles.disabled : "";

  return (
    <button
      disabled={disabled}
      className={`rounded-lg ${colorClass} ${sizeClass} ${disabledClass}`}
    >
      {title}
    </button>
  );
}
