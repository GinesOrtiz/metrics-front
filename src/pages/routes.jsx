import LoginPage from './login/Login'
import HomePage from './home/Home'
import CreatePage from './create/Create'

const routes = [
  {
    path: '/login',
    private: false,
    component: LoginPage,
  },
  {
    path: '/',
    private: true,
    component: HomePage,
    sidebar: true,
    icon: 'insert_chart_outlined',
    exact: true,
  },
  {
    path: '/create',
    private: true,
    component: CreatePage,
    sidebar: true,
    icon: 'add_circle_outline',
  },
]

export default routes
