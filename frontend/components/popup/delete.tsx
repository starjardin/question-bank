function DeletePopup({
  id,
  setOpen,
}: {
  id: string;
  setOpen: (open: boolean) => void;
}) {
  console.log(id);

  return (
    <div className="w-1/3 flex flex-col gap-4 justify-center z-10 fixed top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 text-gray-900">
      <p>Are you sure you are going to delete this question</p>
      <div className="flex row gap-4 justify-between">
        <button
          className="w-1/2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 items-center"
          onClick={() => setOpen(false)}
        >
          No
        </button>
        <button
          className="w-1/2  items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setOpen(false)}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default DeletePopup;
