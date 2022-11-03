import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className='top'>
          <span className='logo'>Logo</span>
        </div>
        <hr /> 
       <div className='center'>
        <ul>
            <p className='title'>MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                <span className='span'>Dashboard</span>
            </li>
            <p className='title'>LISTS</p>
            <li>
                <PeopleIcon className='icon' />
                <span className='span'>Users</span>
            </li>
            <li>
               <Inventory2OutlinedIcon className='icon' />
                <span className='span'>Products</span>
            </li>
            <li>
                <ListAltOutlinedIcon className='icon' />
                <span className='span'>Order</span>
            </li>
            <p className='title'>USEFULLS</p>
            <li>
                <NotificationsOutlinedIcon className='icon' />
                <span className='span'>Stats</span>
            </li>
            <li>
                <NotificationsOutlinedIcon className='icon' />
                <span className='span'>Notification</span>
            </li>
            <p className='title'>SERVICE</p>
            <li>
                <SettingsSuggestOutlinedIcon className='icon' />
                <span className='span'>System Health</span>
            </li>
            <li>
                <SettingsSuggestOutlinedIcon className='icon' />
                <span className='span'>Logs</span>
            </li>
            <li>
                <SettingsSuggestOutlinedIcon className='icon' />
                <span className='span'>Settings</span>
            </li>
            <p className='title'>USER</p>
            <li>
                <LockOpenOutlinedIcon className='icon' />
                <span className='span'>Profile</span>
            </li>            
            <li>
                <LogoutOutlinedIcon className='icon' />
                <span className='span'>Logout</span>
            </li>
        </ul>
       </div>
       <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
       </div>
    </div>
  )
}

export default Sidebar 