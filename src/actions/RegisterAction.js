"use server";

import { registerService } from "@/Service/authService";

export default async function registerAction(currentState) {
    const newUser = {
        firstname: currentState.firstname,
        lastname: currentState.lastname,
        email: currentState.email,
        password: currentState.password,
        gender: currentState.gender,
        
    };
    await registerService(newUser);
}