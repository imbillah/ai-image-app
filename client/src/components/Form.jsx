import React from "react";

const Form = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurprise,
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
            onClick={isSurprise}
            className="font-semibold text-sm bg-slate-300 py-2 px-3 rounded-[5px] text-black shadow-sm"
          >
            Surprise me
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
