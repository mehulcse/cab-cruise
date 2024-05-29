"use client";
import React from "react";
import DatePicker from "react-multi-date-picker";
import { Controller } from "react-hook-form";

export default function DatePickerComponent({ name, control }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          format="MMMM DD YYYY"
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
}
