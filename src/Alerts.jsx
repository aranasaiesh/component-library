import { GrFormClose } from "react-icons/gr";

const warnings = {
  color: {
    error: "bg-red-300",
    warning: "bg-amber-300",
    good: "bg-green-300",
  },
  size: {
    small: "text-sm",
  },
};

export default function Alert(props) {
  const { title, color, icon, onDismiss } = props;

  const warningClass = warnings.color[color];

  return (
    <div
      className={`flex relative py-7 px-40 text-lg text-black rounded-xl shadow-lg ${warningClass}`}
    >
      <div>
        <div className="absolute top-0 left-0 p-8">{icon}</div>
        <div className="flex">{title}</div>
      </div>
      <button className="absolute top-0 right-0 p-2" onClick={onDismiss}>
        {<GrFormClose />}
      </button>
    </div>
  );
}
