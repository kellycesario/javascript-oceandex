import Input from ".";

export default {
  title: "Molecules/Input",
  component: Input,
  args: {},
};

export const OceanDex = () => (
  <Input
    placeholder="Search for animals, filos..."
    aria-label="Search for animals, filos..."
  />
);

export const FavoriteAnimals = () => (
  <Input
    placeholder="Search for your favorite animals"
    aria-label="Search for your favorite animals"
  />
);
