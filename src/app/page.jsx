import {  getWorkSpaceService } from "@/Service/workspaceService";
import LoginComponent from "@/components/LoginComponent";

export default async function Home() {
  const show = await getWorkSpaceService();
  console.log(show, 'sshow')
  return( 
    <main>
      <LoginComponent/>
      
    </main>
  );
}
