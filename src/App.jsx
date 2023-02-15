import { useState } from "react";
import Button from "./Button";
import Alerts from "./Alerts";
import Badge from "./Badge";
import Card from "./Card";
import Modal from "./Modal";
import { ImWarning } from "react-icons/im";
import { MdDone } from "react-icons/md";

function handleClick() {
  alert("Dismiss");
}

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div>
      <h1 className="text-lg p-8 font-bold">Buttons</h1>
      <div className="flex p-8 gap-8">
        <Button title="Blue" color="blue" size="small" />
        <Button title="Delete" color="delete" size="medium" />
        <Button title="Green" color="green" size="large" />
        <Button title="Disabled" size="large" disabled />
      </div>

      <h1 className="text-lg p-8 font-bold">Alerts</h1>
      <div className="flex flex-col justify-center items-center p-8">
        <Alerts
          icon={<ImWarning />}
          title="ALERT"
          color="warning"
          onDismiss={handleClick}
        />
        <Alerts title="WARNING" color="error" onDismiss={handleClick} />
        <Alerts title="ALL GOOD :)" color="good" onDismiss={handleClick} />
      </div>

      <div>
        <h1 className="text-lg p-8 font-bold">Badges</h1>
      </div>
      <div className="flex gap-2 justify-center pt-8 mb-8">
        <Badge icon={<MdDone />} size="small" color="gray" />
        <Badge icon={<MdDone />} size="medium" color="blue" />
        <Badge icon={<MdDone />} size="large" color="light" />
      </div>

      <h1 className="text-lg p-8 font-bold">Card</h1>
      <div className="max-w-sm p-8 border border-gray-400 rounded-md shadow-xl">
        <Card
          imgAlt="A man on a bike"
          href="https://pixabay.com/"
          imgSrc="/elephant.png"
        ></Card>
        <h5 className="text-2xl pt-8 m-4 font-bold tracking-tight text-gray-900">
          Ett Card
        </h5>
        <p className="text-gray-500">This is a Card w a pic!</p>
      </div>

      <div>
        <h1 className="text-lg p-8 font-bold">Modals</h1>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="flex p-8 border border-black rounded-md"
          onClick={() => setShow(true)}
        >
          Open modal
        </button>
      </div>

      <Modal show={show} onClose={() => setShow(false)} size="medium">
        <Modal.Header>This is a Modal</Modal.Header>
        <Modal.Body>
          <p>Do you like this Modal?</p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <div className="flex p-14 justify-center">
        <button
          className="flex p-8 border border-black rounded-md -z-1"
          onClick={() => setShow2(true)}
        >
          Open Modal
        </button>
        <Modal show={show2} onClose={() => setShow2(false)}>
          <Modal.Header>This is also a Modal</Modal.Header>
          <Modal.Body>I hope you like this Modal also.</Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default App;
