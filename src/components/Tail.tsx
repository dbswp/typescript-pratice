import React from "react";

export default function Tail() {
  return (
    <nav className="w-auto pl-10 pr-10 bg-slate-100 ">
      <div className="flex justify-between py-5">
        <ul className="flex gap-16">
          <li className="py-2 flex font-extrabold cursor-pointer">Home</li>
          <li className="py-2 font-semibold cursor-pointer text-slate-500">
            Menu1
          </li>
          <li className="py-2 font-semibold cursor-pointer text-slate-500">
            Menu2
          </li>
          <li className="py-2 font-semibold cursor-pointer text-slate-500">
            Menu3
          </li>
        </ul>
        <a
          href="/"
          className="py-2 px-3 text-white font-bold bg-orange-500 hover:bg-slate-600 rounded transition duration-300"
        >
          Login
        </a>
      </div>
    </nav>
  );
}
