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

    let response
    try {
        response = await fetch(
            url,
            {
                method: methodType,
                headers: headers,
                body: JSON.stringify(requestBody),
                mode: 'no-cors'
            }
        )
        console.log('response --->', response)
        console.log('response text --->', await response.text())
        console.log('response json --->', await response.json())
    } catch (e) {
        console.error('error sending request:', e)
        throw e
    }
    try {
        let jsonResponse = await response.json()
        console.log(jsonResponse)
        return jsonResponse.result
    } catch (e) {
        console.error('invalid response object:', e)
        throw e
    }
}