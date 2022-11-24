export const selectLayout = (pathName: string): string => {
    return pathName.includes('user') ? 'LoginLayout' : 'BaseLayout'
}
