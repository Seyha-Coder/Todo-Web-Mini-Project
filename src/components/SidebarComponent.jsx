import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getWorkSpaceService } from "@/Service/workspaceService";

export default async function SidebarComponent() {
  const workspace = await getWorkSpaceService();
  return (
    <div className="h-screen pl-10 mt-6">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="font-bold uppercase text-gray">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
       {
          workspace?.data?.map((work,key) => (
      <div className="flex items-center w-full mt-5">
        <div className="block w-4 h-4 rounded-full bg-todo"></div>
        
            <div className="flex justify-between w-full pl-3 " key={key}>
              <p>{work.workspaceName}</p>
    
              <EditDeleteDropDownComponent id={work.workSpaceId} />
            </div>
          
      </div>
          ))}
      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="font-bold uppercase text-gray">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      <div className="flex items-center w-full mt-5">
        <div className="w-4 h-4 rounded-full bg-workingOn"></div>
        <div className="flex justify-between w-full pl-3">
          <p>GKS Scholarship</p>
        </div>
      </div>
    </div>
  );
}
