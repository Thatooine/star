export const SendRequest = async (request: any, url: string, method: string): Promise<any> => {
    // Todo get the accessToken from context and set on the header if there is
    const methodType = "POST"
    const headers = {
        "Content-Type": "application/json"
    }
    const requestBody = {
        jsonrpc: "2.0",
        id: "123",
        method: method,
        params: [request]
    }
    let response: any
    try {
        response = await fetch(
            url,
            {
                method: methodType,
                headers: headers,
                body: JSON.stringify(requestBody)
            }
        )
    } catch (e) {
        console.error('error sending request:', e)
        throw e
    }
    try {
        return response.result
    }catch (e) {
        console.error('invalid response object', e)
        throw e
    }
}