import { CheckIcon } from "@radix-ui/react-icons";
import { Checkbox } from "radix-ui";

const CheckboxDemo = () => (
  <div className="flex items-center">
    <Checkbox.Root
      className="flex h-6 w-6 items-center justify-center rounded-sm bg-white shadow-lg hover:bg-violet-100"
      id="checkbox-demo"
    >
      <Checkbox.Indicator className="text-violet-600">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className="p-4 text-sm text-black" htmlFor="checkbox-demo">
      Checkbox Demo
    </label>
  </div>
);

export default CheckboxDemo;
