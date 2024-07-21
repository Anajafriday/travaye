import { forwardRef } from "react";

const Dialog = forwardRef(({ children }, ref) => {
  return (
    <dialog
      className=" h-72 w-4/5  rounded-md  bg-slate-800 outline-none "
      ref={ref}
    >
      <div className="flex items-center justify-center flex-col gap-4 my-20">
        {children}
      </div>
    </dialog>
  );
});
export default Dialog;
