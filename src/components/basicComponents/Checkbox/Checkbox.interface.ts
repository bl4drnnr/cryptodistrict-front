import React from "react";

export interface CheckboxProps {
  label: JSX.Element | string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
