import nookies from 'nookies'
import { tokenService } from '../../services/auth/tokenService'

export async function HttpClient(fetchurl, fetchoptions = {}) {
    const defaultHeaders = fetchoptions.headers || {}
    const options = {
        ...fetchoptions,
        headers: {
            'Content-Type': 'application/json',
            ...defaultHeaders,
        },
        body: fetchoptions.body ? JSON.stringify(fetchoptions.body) : null,
    }
    return fetch(fetchurl, options)
    .then(async (res) => {
        return {
            ok: res.ok,
            status: res.status,
            statusText: res.statusText,
            body: await res.json(),
        }
    })
    .then(async (res) => {
        if(!fetchoptions.refresh) return res
        if(res.status !== 401) return res
        console.log('Atualizar token')

        const isServer = Boolean(fetchoptions?.ctx)
        const currentRefreshToken = fetchoptions?.ctx?.req?.cookies['REFRESH_TOKEN_NAME']

        try {
            const refreshResponse = await HttpClient(`https://inspira.sampa.br/api/refresh`, {
                method: isServer ? 'PUT' : 'GET',
                body: isServer ? { refresh_token: currentRefreshToken } : undefined,
            })

            const newAccessToken = refreshResponse.body.data.access_token
            const newRefreshToken = refreshResponse.body.data.refresh_token

            if(isServer) {
                nookies.set(fetchoptions.ctx, 'REFRESH_TOKEN_NAME', newRefreshToken, {
                    httpOnly: true,
                    sameSite: 'lax',
                    path: '/',
                })
            }

            tokenService.save(newAccessToken)

            const retryResponse = await HttpClient(fetchurl, {
                ...options,
                headers: {
                    Authorization: `Bearer ${newAccessToken}`,
                },
                refresh: false,
            })

            return retryResponse
        } catch(err) {
            return res
        }
    })
}