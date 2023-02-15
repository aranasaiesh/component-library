const styles = {
  size: {
    small: "text-sm",
    medium: "text-md",
    large: "text-lg",
  },
};

function Modal(props) {
  const { size, onClose, show, children } = props;

  const sizeClass = styles.size[size];

  function handleOnClose(e) {
    if (e.target.id === "container") onClose();
  }

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm justify-center items-center ${sizeClass}`}
      onClick={handleOnClose}
      id="container"
    >
      <div className="flex justify-center">
        <div className="relative self-center mt-36 place-items-center bg-white p-10 rounded-2xl">
          <div className="p-5">
            <button
              className="absolute top-0 right-0 hover:bg-gray-300 rounded-md p-2 text-lg"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>

          <button
            className="justify-center border border-green-800 hover:bg-green-400 rounded-xl p-3 mr-3 ml-10"
            onClick={onClose}
          >
            Yes
          </button>

          <button
            className="border border-green-800 hover:bg-red-800 rounded-xl p-3"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

function Header(props) {
  const { children } = props;

  return (
    <div className="mb-5 border-b border-black text-2xl pb-5">{children}</div>
  );
}

Modal.Header = Header;

function Body(props) {
  const { children } = props;

  return (
    <div className="text-lg leading-relaxed text-gray-400 pb-5 p-5">
      {children}
    </div>
  );
}

Modal.Body = Body;

export default Modal;

function Footer(props) {
  const { children } = props;

  return <div>{children}</div>;
}

Modal.Footer = Footer;
