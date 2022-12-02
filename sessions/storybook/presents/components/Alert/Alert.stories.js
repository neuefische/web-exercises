import Alert from ".";

export default {
  title: "Alert",
  component: Alert,
};

export const Default = () => <Alert />;
export const BlueAlert = () => (
  <Alert text="Help me, I'm light blue!" color={"#cfe2ff"} />
);
export const GreyAlert = () => (
  <Alert text="A grey old wizard alert!" color={"#e2e3e5"} />
);
export const GreenAlert = () => (
  <Alert
    text="The grass is always greener on the other side."
    color={"#d1e7dd"}
  />
);
