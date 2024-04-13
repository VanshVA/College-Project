import React from 'react'
import './AdminDashboard.css'

// const sidebarItems = document.querySelectorAll('.sidebar .item');
// const menuBtn = document.getElementById('menu-btn');
// const leftSection = document.querySelector('.left-section');

// let isMenuOpen = false;

// sidebarItems.forEach(sideItem => {
//     sideItem.addEventListener('click' , ()=>{
//         sidebarItems.forEach(item => {
//             item.classList.remove('active');
//         });
//         sideItem.classList.add('active');
//     });
// });

// menuBtn.addEventListener('click',()=>{
//     if(!isMenuOpen){
//         leftSection.style.left = '0';
//     }else{
//         leftSection.style.left = '-160px';
//     }
//     isMenuOpen = !isMenuOpen;
// });

export default function AdminDashboard() {
    return (
        <>
            <div className="adminbody">
                <div className="left-section">
                    <div className="sidebar">
                        <h2>Dashboard</h2>
                        <div className="item active">
                            <i className="ri-apps-line" />
                            <h3>Dashboard</h3>
                        </div>
                        <div className="item">
                            <i className="ri-user-add-line" />
                            <h3>Add Teacher</h3>
                        </div>
                        <div className="item">
                            <i className="ri-profile-line" />
                            <h3>Profiles</h3>
                        </div>
                        <div className="item">
                            <i className="ri-settings-line" />
                            <h3>Seeting</h3>
                        </div>
                    </div>
                    <div className="sign-out">
                        <i className="ri-login-box-line" />
                        <h3>Sign out</h3>
                    </div>
                </div>
                <div className="adminmain">
                    <div className="header">
                        <div className="search">
                            <button>
                                <i className="ri-search-2-line" />
                            </button>
                            <input type="text" placeholder="Search" />
                            <i className="ri-equalizer-line" />
                        </div>
                        <div className="icon-btns">
                            <i className="ri-notification-line" />
                            <i className="ri-message-3-line" />
                            <i className="ri-menu-line" id="menu-btn" />
                        </div>
                    </div>
                    <h3 className="separator">Quick Access</h3>
                    <div className="quick-access">
                        <div className="item">
                            <i className="ri-user-2-fill" />
                            <h5>Teachers</h5>
                            <p>50 Teachers</p>
                        </div>
                        <div className="item">
                            <i className="ri-user-line" />
                            <h5>Students</h5>
                            <p>150 Students</p>
                        </div>
                        <div className="item">
                            <i className="ri-user-settings-line" />
                            <h5>Admins</h5>
                            <p>3 Admins</p>
                        </div>
                        <div className="item">
                            <i className="ri-registered-line" />
                            <h5>Register</h5>
                            <p>Teacher</p>
                        </div>
                    </div>
                    <h3 className="separator">Recent Login</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td className="icon">
                                    <i className="ri-image-circle-line" />
                                </td>
                                <td className="name">Atul Rai</td>
                                <td className="extension">Teacher</td>
                                <td className="size">2m ago</td>
                                <td className="more">
                                    <i className="ri-more-fill" />
                                </td>
                            </tr>
                            <tr>
                                <td className="icon">
                                    <i className="ri-image-circle-line" />
                                </td>
                                <td className="name">Vansh Vyas</td>
                                <td className="extension">Student</td>
                                <td className="size">3m ago</td>
                                <td className="more">
                                    <i className="ri-more-fill" />
                                </td>
                            </tr>
                            <tr>
                                <td className="icon">
                                    <i className="ri-image-circle-line" />
                                </td>
                                <td className="name">Varsha Sharma</td>
                                <td className="extension">Teacher</td>
                                <td className="size">8m ago</td>
                                <td className="more">
                                    <i className="ri-more-fill" />
                                </td>
                            </tr>
                            <tr>
                                <td className="icon">
                                    <i className="ri-image-circle-line" />
                                </td>
                                <td className="name">Salman Siddiqui</td>
                                <td className="extension">Teacher</td>
                                <td className="size">10m ago</td>
                                <td className="more">
                                    <i className="ri-more-fill" />
                                </td>
                            </tr>
                            <tr>
                                <td className="icon">
                                    <i className="ri-image-circle-line" />
                                </td>
                                <td className="name">Anuj Prajapati</td>
                                <td className="extension">Student</td>
                                <td className="size">30m ago</td>
                                <td className="more">
                                    <i className="ri-more-fill" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="right-section">
                    <div className="profile">
                        <div className="info">
                            <img
                                src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                                alt=""
                            />
                            <div className="account">
                                <h5>Vansh vyas | ADMIN</h5>
                                <p>Vansh@gmail.com</p>
                            </div>
                        </div>
                        <i className="ri-arrow-down-s-line" />
                    </div>
                    <div className="widgets">
                        <div className="disk">
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
