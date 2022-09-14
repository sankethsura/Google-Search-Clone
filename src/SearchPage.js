import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbGridDots } from "react-icons/tb";

const Search = (props) => {
  const nav = useNavigate();

  const [value, setValue] = useState("");
  return (
    <div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/clone-1c8fd.appspot.com/o/hannah-montez-2VslRz5G8fo-unsplash.jpg?alt=media&token=7fae2463-1a44-416c-abe0-6f3092c17188"
        className="fixed w-[100vw] h-[100vh] -z-50 object-cover opacity-75 "
      />
      <div className="h-[65px] fixed bg-black top-0 flex opacity-40 -z-10 w-[100vw]"></div>
      <section className="flex items-center justify-end px-4 pt-4 text-white ">
        <div className=" px-4">Gmail</div>
        <div className=" px-4">Images</div>
        <div className="px-5">
          <TbGridDots />
        </div>
        <div className=" ">
          <img
            className="w-[33px] h-[33px] rounded-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/clone-1c8fd.appspot.com/o/photo-1570612861542-284f4c12e75f.jpg?alt=media&token=d86973bd-de5e-405e-b9a2-ad0e7d06c894"
          />
        </div>
      </section>
      <div className="pt-[20vh]">
        <div>
          <div className="flex justify-center">
            <img
              className="w-[250px] h-[100px] lg:w-[450px]lg:h-[200px] object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/clone-1c8fd.appspot.com/o/pngegg%20(12).png?alt=media&token=48d85db9-2606-40e0-a7f8-5988c2409826"
            />
          </div>
          <input
            className="bg-slate-50 w-[80vw] max-w-[850px] h-[3em] rounded-3xl px-8 "
            placeholder="Search Google or type a URL"
            onChange={(e) => props.setTerm(e.target.value)}
          />
        </div>
        <button
          className="text-white bg-green-600 px-4 py-1 mt-4 rounded-3xl border-2 border-slate-100"
          onClick={() => {
            nav("/search");
            console.log(props.term);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
