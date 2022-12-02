import Card from ".";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "An Awesome Cake",
  description: "No one can resist a good cake!",
  minimumPrice: 5,
  maximumPrice: 50,
  important: false,
};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, minimumPrice: 500, maximumPrice: 10000 };
