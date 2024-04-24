"use server";

import {
  createWorkSpaceService,
  deleteWorkSpaceService,
} from "@/Service/workspaceService";

export default async function createWorkSpaceAction(currentState) {
  const newWorkSpace = {
    workspaceName: currentState.workspaceName,
  };
  await createWorkSpaceService(newWorkSpace);
  console.log(currentState);
}

export const deleteWorkspaceById = async (id) => {
  const workspace = await deleteWorkSpaceService(id);

  //   const deletedWorkspace = await workspace;
  console.log("delete ", workspace);
  return workspace;
};
