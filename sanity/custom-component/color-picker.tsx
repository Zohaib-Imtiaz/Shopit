import { ColorPicker } from "antd";
import { Color } from "antd/es/color-picker";
import { useCallback } from "react";
import { set, unset } from "sanity";

const ColorSelector = (props: any) => {
  const { onChange } = props;

  const handleChange = useCallback(
    (value: Color, hex: string) => {
      onChange(hex ? set(hex) : unset());
    },
    [onChange]
  );

  return <ColorPicker onChange={handleChange} allowClear size="large" showText />;
};

export default ColorSelector;
