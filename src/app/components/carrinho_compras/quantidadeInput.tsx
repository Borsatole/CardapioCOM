import React, { useState } from "react";

const InputQuantidade = () => {
  const [value, setValue] = useState(1);

  if (value < 1) {
    setValue(1);
  };



  const decrement = () => {
    setValue((prev) => prev - 1);
  };

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) setValue(val);
  };

  return (
    <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex items-center gap-x-1.5">
        <button
          type="button"
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          onClick={decrement}
          aria-label="Decrease"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
          </svg>
        </button>

        <input
          className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
          type="number"
          value={value}
          onChange={handleChange}
          aria-roledescription="Number field"
          style={{ MozAppearance: "textfield" }}
        />

        <button
          type="button"
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          onClick={increment}
          aria-label="Increase"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputQuantidade;
