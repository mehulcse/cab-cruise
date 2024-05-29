"use client";
import React from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { Controller } from "react-hook-form";

export default function TimePickerComponent({ value, onChange }) {
  return (
    // <Controller
    //   name={name}
    //   control={control}
    //   render={({ field: { onChange, value } }) => (
    <DatePicker
      disableDayPicker
      value={value || new Date().getTime()}
      format="hh:mm:ss A"
      onChange={onChange}
      plugins={[<TimePicker />]}
    />
    //   )}
    // />
  );
}
