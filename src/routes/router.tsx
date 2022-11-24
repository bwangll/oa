import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts'
import NotFound from '../pages/404Page'
import Assessment from '../pages/assessment'
import Attendance from '../pages/attendance'
import AttendanceInfo from '../pages/attendanceInfo'
import Dashboard from '../pages/dashboard'
import Department from '../pages/department'
import Level from '../pages/level'
import RewardRecord from '../pages/rewardRecord'
import Salary from '../pages/salary'
import Staff from '../pages/staff'
import ForgetPassword from '../pages/users/ForgetPassword'
import Login from '../pages/users/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/404Page',
                element: <NotFound />
            },
            {
                path: '/assessment',
                element: <Assessment />
            },
            {
                path: '/attendance',
                element: <Attendance />
            },
            {
                path: '/attendanceInfo',
                element: <AttendanceInfo />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/department',
                element: <Department />
            },
            {
                path: '/level',
                element: <Level />
            },
            {
                path: '/rewardRecord',
                element: <RewardRecord />
            },
            {
                path: '/salary',
                element: <Salary />
            },
            {
                path: '/staff',
                element: <Staff />
            },
            {
                path: '/users/forgetPassword',
                element: <ForgetPassword />
            },
            {
                path: '/users/login',
                element: <Login />
            }
        ]
    }
])

export default router
