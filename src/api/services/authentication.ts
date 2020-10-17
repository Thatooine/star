import {SendRequest} from "../../utility/jsonRPCRequestClient";
import {User} from "../entities/user";

export interface LoginRequest {
    accessToken: string
}

export interface LoginResponse {
    accessToken: string
}

export interface SignUpRequest {
    user: User
}

export interface SignUpResponse {
}

// Todo url to change based on the environment
export const AuthenticationServices = {
    Login: async (request: LoginRequest): Promise<LoginResponse> => {
        return await SendRequest(
            request,
            "http://localhost:5000/login",
            'login',
        ) as LoginRequest
    },
    SignUp: async (request: SignUpRequest): Promise<SignUpResponse> => {
        return await SendRequest(
            request,
            "http://localhost:5000/signUp",
            'signUp',
        ) as SignUpResponse
    }
}