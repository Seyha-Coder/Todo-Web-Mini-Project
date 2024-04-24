import { authOption } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const requestHeader = async () => {
  const getToken = await getServerSession(authOption);
  const token = await getToken.user?.token;
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return header;
};
