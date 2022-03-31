import { Slider, SliderProps } from "@mantine/core";

const StepsSlider: React.FC<SliderProps> = ({
  marks,
  step,
  onChange,
  ...props
}) => {
  return (
    <>
      <Slider
        label={(val) => marks?.find((mark) => mark.value === val)?.label}
        step={step}
        marks={marks}
        min={0}
        max={9}
        onChange={onChange}
        styles={{ markLabel: { display: "none" } }}
        {...props}
      />
    </>
  );
};

export default StepsSlider;
