
import { createWorkSpaceService } from "@/Service/workspaceService";
// import createWorkSpaceAction from "@/actions/WorkSpaceAction";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

export default function WorkspacePopupComponent() {
  const handleSubmit = async (data) => {
    "use server";
    console.log(data, "workspace");
    const response = await createWorkSpaceService({
      workspaceName: data.get("workspaceName"),
    });
    console.log(response, 'my info');
  };
  return (
    <form action={handleSubmit}>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="cursor-pointer">
        <Image src={"/assets/icons/plus.svg"} width={22} height={22} />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold capitalize">create new workspace</h3>
         <div>
         <input
            type="text"
            name="workspaceName"
            placeholder="workspace name"
            className="block w-full px-5 py-2 mt-3 border rounded-lg border-gray focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
          />
          <input type="submit" value="Create" />
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="flex items-center h-12 px-5 mr-3 text-white bg-blue-600 rounded-lg">
              <button>Create</button>
            </label>
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
         </div>
        </div>
      </div>
    </form>
  );
}
