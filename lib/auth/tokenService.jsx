import nookies from 'nookies'

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

const ONE_SECOND = 1
const ONE_MINUTE = 60 * ONE_SECOND
const ONE_HOUR = 60 * ONE_MINUTE
const ONE_DAY = 24 * ONE_HOUR
const ONE_WEEK = 7 * ONE_DAY
const ONE_MONTH = 30 * ONE_DAY
const ONE_YEAR = 365 * ONE_DAY

export const tokenService = {
    save(accessToken, ctx = null) {
        //globalThis?.sessionStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
        nookies.set(ctx, ACCESS_TOKEN_KEY, accessToken, {
            maxAge: ONE_MINUTE,
            path: '/',
        })
    },
    get(ctx = null) {
        const cookies = nookies.get(ctx)
        return cookies[ACCESS_TOKEN_KEY] || ''
        //return globalThis?.sessionStorage?.getItem(ACCESS_TOKEN_KEY)
    },
    delete(ctx = null) {
        nookies.destroy(ctx, ACCESS_TOKEN_KEY)
        //globalThis?.sessionStorage?.removeItem(ACCESS_TOKEN_KEY)
    }
}