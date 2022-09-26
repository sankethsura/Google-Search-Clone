import { AiOutlineSetting } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchPage2 = (props) => {
  const nav = useNavigate();
  const data2 = {
    displayLink: "www.bluemic.com",
    htmlSnippet:
      "Blue offers premium USB and XLR microphones, and audiophile headphones for recording, podcasting, gaming, streaming, YouTube, and more.",
    htmlTitle: "Blue - Homepage",
    link: "https://www.bluemic.com/en-us/",
    snippet:
      "Blue offers premium USB and XLR microphones, and audiophile headphones for recording, podcasting, gaming, streaming, YouTube, and more.",
    title: "Blue - Homepage",
  };
  //   const arr =[]
  // console.log(props.data.items[0].pagemap.cse_image[0].src);
  console.log(props.data.items)
  //   if(props.data){
  const arr = props.data.items.map((item, i) => {
    let image = ""
    if(item.pagemap.cse_image) image=item.pagemap.cse_image[0].src
    
    return (
      <div key={i} className="flex w-[80vw] m-auto">
        <div>

        <div className="flex items-start flex-col w-[70vw] m-auto pt-4">
          <div
            onClick={() => window.open(item.link)}
            className="text-start text-[#265A5C] text-sm hover:underline cursor-pointer"
            >
            {item.link}
          </div>
          <div
            onClick={() => window.open(item.link)}
            className="text-start text-[#2155CD] font-semibold text-xl py-1 hover:underline cursor-pointer"
            >
            {item.title}
          </div>
          <div className="text-start text-[#265A5C] text-sm">
            {item.snippet}
          </div>
        </div>
        <div className="w-[70vw] m-auto">
          <hr></hr>
        </div>
            </div>
          {image?
          <div className=" "><img className="w-[70px] h-[70px] object-cover rounded-lg" src={image} /></div>
        :
        <div></div>
        }
          
          
          
      </div>
    );
  });
  // }

  //   console.log(arr);

  return (
    <div>
      <div>
        <nav className="flex justify-between items-center">
          <div className="flex items-center ">
            <div
              onClick={() => {
                nav("/");
              }}
              className="pb-[10px] px-[45px] scale-150 cursor-pointer"
            >
              <IoIosArrowBack />
            </div>
            <img
              onClick={() => {
                nav("/");
              }}
              className="w-[150px] cursor-pointer"
              src="https://firebasestorage.googleapis.com/v0/b/clone-1c8fd.appspot.com/o/pngegg%20(12).png?alt=media&token=48d85db9-2606-40e0-a7f8-5988c2409826"
            />
            {/* <input
            className="bg-slate-50 w-[50vw] max-w-[850px] h-[3em] rounded-3xl px-8 "
            placeholder="Search Google or type a URL"
            onChange={(e) => props.setTerm(e.target.value)}
          /> */}
          </div>
          <section className="flex flex-row justify-center items-center">
            <div className="px-3 scale-125">
              <AiOutlineSetting />
            </div>
            <div className="px-3 scale-125">
              <TbGridDots />
            </div>
            <div className="px-3">
              <img
                className="w-[33px] h-[33px] rounded-full object-cover"
                src="https://firebasestorage.googleapis.com/v0/b/clone-1c8fd.appspot.com/o/photo-1570612861542-284f4c12e75f.jpg?alt=media&token=d86973bd-de5e-405e-b9a2-ad0e7d06c894"
              />
            </div>
          </section>
        </nav>
        <hr></hr>

        {arr}
      </div>
      
    </div>
  );
};

export default SearchPage2;
