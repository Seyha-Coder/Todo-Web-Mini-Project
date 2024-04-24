
import { authOption } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { requestHeader } from "@/lib/requestHeader";
import { getServerSession } from "next-auth";
const getToken = async () => {
    const session = await getServerSession(authOption);
    const token = session.user.token;
    return token;
  };
export const getWorkSpaceService = async () => {
  try {
    const headers = await requestHeader();
    const res = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/workspaces`,
      {
        method: "GET",
        headers: headers,
        cache: 'no-store'
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return null;
  }
};

export const createWorkSpaceService = async (req) => {
   
  try {
    
    const headers = await requestHeader();
    console.log(req, "reguest");
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/workspaces",
      {
        method: "POST",
        headers:headers,
        body: JSON.stringify(req),
        cache: "no-store",
      }
    );
    console.log(res);
    console.log(req,'my req')

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data, "create");
    return data;
  } catch (error) {
    console.error("Error creating workspace:", error);
    return null;
  }
};

export const updateWorkSpaceService = async (id, req) => {
  try {
    const headers = await requestHeader();
    console.log(token, "create token");
    console.log(id, req, "reguest");
    const res = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/workspaces1/${id}`,
      {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(req),
      }
    );
    console.log(res);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data, "create");
    return data;
  } catch (error) {
    console.error("Error creating workspace:", error);
    return null;
  }
};
export const deleteWorkSpaceService = async (id) => {
  console.log("first", id);
  try {
    const headers = await requestHeader();
    console.log(id, "delete");
    console.log("Before token : ");

    console.log("After token : ", id);
    const res = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/workspaces/${id}`,
      {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify({
          workspaceId: id,
        }),
      }
    );
    console.log(res, "dgfdgdgf");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error creating workspace:", error);
    return null;
  }
};
