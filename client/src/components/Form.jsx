import React from "react";

const Form = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurprise,
  handleSurprise,
}) => {
  return (
    <div>
      <div className="flex mb-2 items-center gap-2">
        <label
          htmlFor={name}
          className="text-sm font-medium block text-gray-800"
        >
          {labelName}
        </label>
        {isSurprise && (
          <button
            type="button"
            onClick={handleSurprise}
            className="font-semibold text-sm bg-teal-400 py-2 px-4 rounded-[5px] text-black shadow-sm"
          >
            Get Idea
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="border bg-gray-50 border-gray-300 rounded-lg text-gray-500 text-sm focus:ring-teal-500 focus:border-teal-500 block outline-none w-full p-3"
      />
    </div>
  );
};

export default Form;
