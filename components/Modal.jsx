"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/features/modalSlice";

export default function Modal({ productTitle }) {
  // console.log(productTitle);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(errors);

  const onSubmit = (data) => console.log(data);

  let { isOpen } = useSelector((state) => state.modal);
  let dispatch = useDispatch();

  const handleClose = async (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => dispatch(closeModal())}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* headings */}
                  <Dialog.Title
                    as="h3"
                    className="text-3xl leading-6 font-thin capitalize text-center text-slate-950"
                  >
                    contact{" "}
                    <span className="text-primary text-shadow font-bold italic">
                      panamax
                    </span>
                    <p className="text-sm text-slate-700 my-4">
                      Contact us we will contact with you soon.
                    </p>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      method="post"
                      action="https://magnitecorp.com/panamax-backend/form.php"
                      // onSubmit={handleSubmit(handleClose)}
                      className="col-span-1"
                    >
                      <div className="flex flex-col justify-center items-center h-full gap-y-6">
                        {/* inputs */}
                        <div className="gap-y-4 w-full grid grid-cols-1">
                          {/* name */}
                          <div className="relative ">
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter your name"
                              required
                              className="border border-[#EEEEEE] focus:border-primary text-sm p-2 rounded-md w-full transition-colors"
                            />
                          </div>
                          {/* email */}
                          <div className="relative md:col-span-1">
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="Enter you email"
                              className={`border border-[#EEEEEE] focus:border-primary text-sm p-2 rounded-md w-full transition-colors`}
                            />
                          </div>
                          {/* phone number */}
                          <div className="relative md:col-span-1">
                            <input
                              type="tel"
                              name="number"
                              required
                              placeholder="Enter your contact no."
                              className="border border-[#EEEEEE] focus:border-primary text-sm p-2 rounded-md w-full transition-colors"
                            />
                          </div>

                          {/* company */}
                          <div className="relative">
                            <input
                              name="company"
                              type="text"
                              required
                              placeholder="company"
                              className="border border-[#EEEEEE] focus:border-primary text-sm p-2 rounded-md w-full transition-colors"
                            />
                          </div>

                          {/* product */}
                          <div className="">
                            <input
                              type="text"
                              name="product"
                              required
                              rows="4"
                              placeholder="Product"
                              className="border !border-[#EEEEEE] text-sm p-2 rounded-md w-full h-full capitalize cursor-not-allowed pointer-events-none bg-gray-100"
                              value={productTitle}
                            />
                          </div>
                        </div>

                        {/* cta and info */}
                        <div className="w-full">
                          <button
                            type="submit"
                            name="submit"
                            className="btn-primary cursor-pointer w-full"
                            onClick={handleClose}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
