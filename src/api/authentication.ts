import {SendRequest} from "../utility/jsonRPCRequestClient";

export interface LoginRequest{
    accessToken: string
}

export interface LoginResponse{
    accessToken: string
}

// Todo url to change based on the environment
export const AuthenticationServices = {
    Login: async (request: LoginRequest): Promise<LoginResponse> =>  {
       const response = await SendRequest(
            request,
            "http://localhost:5000/login",
            'login',
        )
        return response as LoginResponse
    },
}