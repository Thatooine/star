export interface LoginRequest{
    accessToken: string
}

export interface LoginResponse{
    accessToken: string
}

const AuthenticationServices = {
    Login: (request: LoginRequest): LoginResponse =>  {

    },
}