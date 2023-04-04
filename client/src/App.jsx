import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Products from './scenes/products'
import Dashboard from './scenes/dashboard'
import Layout from './scenes/layout'
import { themeSettings } from './theme'
import Customers from './scenes/customers'
import Transactions from './scenes/transactions'
import Geography from './scenes/geography'
import Overview from './scenes/overview'
import Daily from './scenes/daily'

export default function App() {
	const mode = useSelector((state) => state.global.mode)
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
	return (
		<div>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route element={<Layout />}>
							<Route path='/' element={<Navigate to='/dashboard' replace />} />
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='/products' element={<Products />} />
							<Route path='/customers' element={<Customers />} />
							<Route path='/transactions' element={<Transactions />} />
							<Route path='/geography' element={<Geography />} />
							<Route path='/overview' element={<Overview />} />
							<Route path='/daily' element={<Daily />} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	)
}
