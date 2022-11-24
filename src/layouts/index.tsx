import React from 'react'
import LoginLayout from './LoginLayout'
import BaseLayout from './BaseLayout'
import { selectLayout } from '@/utils/selectLayout'
import { Outlet, useLocation } from 'react-router-dom'
import Loading from '@/compoents/Loading'
import { useSelector } from 'react-redux'
import { IUserStore } from '@/store/user/IUserStore'

const Layout: React.FC = () => {
    let location = useLocation()
    const layoutMap = new Map()
    layoutMap.set('LoginLayout', LoginLayout)
    layoutMap.set('BaseLayout', BaseLayout)
    const Container = layoutMap.get(selectLayout(location.pathname))
    const loading = useSelector((state: IUserStore) => state.user.loading)
    return (
        <Container>
            <Loading isShow={loading} />
            <Outlet />
        </Container>
    )
}

export default Layout
