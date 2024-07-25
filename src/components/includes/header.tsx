import { useState } from 'react';
import logo from './../../images/logo.jpg'

const Header = () => {
    const [showLangOptions, setShowLangOptions] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header>
            <div className="top">
                <div className="container">
                    <div>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            </svg>
                            +201120000340
                        </a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                            </svg>
                            info@sos-egypt.org
                        </a>
                    </div>
                    <div>
                        <div className="lang-select">
                            <div className="selected" onClick={() => setShowLangOptions(!showLangOptions)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M3.6 9h16.8" />
                                <path d="M3.6 15h16.8" />
                                <path d="M11.5 3a17 17 0 0 0 0 18" />
                                <path d="M12.5 3a17 17 0 0 1 0 18" />
                                </svg>
                                English
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6 9l6 6l6 -6" />
                                </svg>
                            </div>
                            {
                                showLangOptions && (
                                    <div className="options">
                                        <div className="option">English</div>
                                        <div className="option">Arabic</div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="social">
                            <a href="">
                                <svg id="fi_3128208" enable-background="new 0 0 100 100" height="512" viewBox="0 0 100 100" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_x30_1._Facebook"><path id="Icon_11_" d="m40.4 55.2c-.3 0-6.9 0-9.9 0-1.6 0-2.1-.6-2.1-2.1 0-4 0-8.1 0-12.1 0-1.6.6-2.1 2.1-2.1h9.9c0-.3 0-6.1 0-8.8 0-4 .7-7.8 2.7-11.3 2.1-3.6 5.1-6 8.9-7.4 2.5-.9 5-1.3 7.7-1.3h9.8c1.4 0 2 .6 2 2v11.4c0 1.4-.6 2-2 2-2.7 0-5.4 0-8.1.1-2.7 0-4.1 1.3-4.1 4.1-.1 3 0 5.9 0 9h11.6c1.6 0 2.2.6 2.2 2.2v12.1c0 1.6-.5 2.1-2.2 2.1-3.6 0-11.3 0-11.6 0v32.6c0 1.7-.5 2.3-2.3 2.3-4.2 0-8.3 0-12.5 0-1.5 0-2.1-.6-2.1-2.1 0-10.5 0-32.4 0-32.7z"></path></g></svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8.267 3a1 1 0 0 1 .73 .317l.076 .092l4.274 5.828l5.946 -5.944a1 1 0 0 1 1.497 1.32l-.083 .094l-6.163 6.162l6.262 8.54a1 1 0 0 1 -.697 1.585l-.109 .006h-4.267a1 1 0 0 1 -.73 -.317l-.076 -.092l-4.276 -5.829l-5.944 5.945a1 1 0 0 1 -1.497 -1.32l.083 -.094l6.161 -6.163l-6.26 -8.539a1 1 0 0 1 .697 -1.585l.109 -.006h4.267z" stroke-width="0" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="">
                                <svg height="682pt" viewBox="-21 -117 682.66672 682" width="682pt" xmlns="http://www.w3.org/2000/svg" id="fi_1384028"><path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"></path></svg>
                            </a>
                            <a href="">
                                <svg id="fi_2111532" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"></path><path d="m.396 7.977h4.976v16.023h-4.976z"></path><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <div className="nav_wrapper">
                        <img src={logo} alt="logo" className='logo' />
                        <ul className={showMenu ? "show" : ""}>
                            <li><a href="" className='active'>Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Our Programms</a></li>
                            <li><a href="">Success Partners</a></li>
                            <li><a href="">Stories</a></li>
                            <li><a href="">Support Us</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li className="more">
                                <div>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                        </svg>
                                        +201120000340
                                    </a>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                        <path d="M3 7l9 6l9 -6" />
                                        </svg>
                                        info@sos-egypt.org
                                    </a>
                                </div>
                                <div>
                                    <div className="lang-select">
                                        <div className="selected" onClick={() => setShowLangOptions(!showLangOptions)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                            <path d="M3.6 9h16.8" />
                                            <path d="M3.6 15h16.8" />
                                            <path d="M11.5 3a17 17 0 0 0 0 18" />
                                            <path d="M12.5 3a17 17 0 0 1 0 18" />
                                            </svg>
                                            English
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M6 9l6 6l6 -6" />
                                            </svg>
                                        </div>
                                        {
                                            showLangOptions && (
                                                <div className="options">
                                                    <div className="option">English</div>
                                                    <div className="option">Arabic</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="social">
                                        <a href="">
                                            <svg id="fi_3128208" enable-background="new 0 0 100 100" height="512" viewBox="0 0 100 100" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_x30_1._Facebook"><path id="Icon_11_" d="m40.4 55.2c-.3 0-6.9 0-9.9 0-1.6 0-2.1-.6-2.1-2.1 0-4 0-8.1 0-12.1 0-1.6.6-2.1 2.1-2.1h9.9c0-.3 0-6.1 0-8.8 0-4 .7-7.8 2.7-11.3 2.1-3.6 5.1-6 8.9-7.4 2.5-.9 5-1.3 7.7-1.3h9.8c1.4 0 2 .6 2 2v11.4c0 1.4-.6 2-2 2-2.7 0-5.4 0-8.1.1-2.7 0-4.1 1.3-4.1 4.1-.1 3 0 5.9 0 9h11.6c1.6 0 2.2.6 2.2 2.2v12.1c0 1.6-.5 2.1-2.2 2.1-3.6 0-11.3 0-11.6 0v32.6c0 1.7-.5 2.3-2.3 2.3-4.2 0-8.3 0-12.5 0-1.5 0-2.1-.6-2.1-2.1 0-10.5 0-32.4 0-32.7z"></path></g></svg>
                                        </a>
                                        <a href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M8.267 3a1 1 0 0 1 .73 .317l.076 .092l4.274 5.828l5.946 -5.944a1 1 0 0 1 1.497 1.32l-.083 .094l-6.163 6.162l6.262 8.54a1 1 0 0 1 -.697 1.585l-.109 .006h-4.267a1 1 0 0 1 -.73 -.317l-.076 -.092l-4.276 -5.829l-5.944 5.945a1 1 0 0 1 -1.497 -1.32l.083 -.094l6.161 -6.163l-6.26 -8.539a1 1 0 0 1 .697 -1.585l.109 -.006h4.267z" stroke-width="0" fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a href="">
                                            <svg height="682pt" viewBox="-21 -117 682.66672 682" width="682pt" xmlns="http://www.w3.org/2000/svg" id="fi_1384028"><path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"></path></svg>
                                        </a>
                                        <a href="">
                                            <svg id="fi_2111532" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"></path><path d="m.396 7.977h4.976v16.023h-4.976z"></path><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"></path></svg>
                                        </a>
                                    </div>
                                </div>

                            </li>
                        </ul>
                        <div style={{display: "flex", gap: 8}}>

                        <a href="" className="donate">
                            <svg height="511pt" viewBox="0 -24 511.99906 511" width="511pt" xmlns="http://www.w3.org/2000/svg" id="fi_1692130"><path d="m50 262.597656c-5.519531 0-10 4.480469-10 10 0 5.519532 4.480469 10 10 10s10-4.480468 10-10c0-5.519531-4.480469-10-10-10zm0 0"></path><path d="m459.617188 297.273438-94.273438 32.410156c.417969-2.320313.652344-4.6875.652344-7.089844 0-22.054688-17.941406-40-40-40h-64.757813c-1.71875 0-3.414062-.441406-4.910156-1.285156l-52.832031-29.714844c-10.445313-5.886719-22.316406-9-34.328125-9h-70.890625c-4.125-11.636719-15.242188-19.996094-28.277344-19.996094h-60c-5.523438 0-10 4.476563-10 10v179.996094c0 5.523438 4.476562 10 10 10h60c12.738281 0 23.660156-8.003906 27.996094-19.246094 11.320312 1.40625 24.417968 4.753906 32.648437 9.691406l52.296875 31.378907c19.8125 11.890625 42.496094 18.175781 65.605469 18.175781 18.3125 0 36.054687-3.84375 52.738281-11.421875l186.644532-82.183594c20.671874-8.386719 30.878906-33.1875 19.0625-55.046875-8.691407-16.085937-29.046876-23.242187-47.375-16.667968zm-379.617188 95.367187c-.023438 5.492187-4.503906 9.953125-10 9.953125h-50v-159.996094h50c5.511719 0 10 4.484375 10 10zm400.332031-42.148437c-.105469.039062-.210937.085937-.316406.128906 0 0-186.921875 82.304687-186.957031 82.320312-14.082032 6.40625-29.058594 9.652344-44.511719 9.652344-19.484375 0-38.609375-5.296875-55.3125-15.324219l-52.300781-31.378906c-11.195313-6.714844-27.226563-10.808594-40.933594-12.449219v-120.84375h69.167969c8.578125 0 17.054687 2.21875 24.519531 6.425782l52.832031 29.714843c4.476563 2.523438 9.570313 3.859375 14.71875 3.859375h64.757813c11.027344 0 20 8.96875 20 20 0 10.988282-8.976563 20-20 20h-101.65625c-5.523438 0-10 4.476563-10 10 0 5.519532 4.476562 9.996094 10 9.996094h101.65625c6.558594 0 13.015625-1.628906 18.746094-4.683594 0 0 121.542968-41.78125 121.589843-41.796875 8.960938-3.234375 19.09375-.015625 23.066407 7.335938 5.957031 11.019531 1.03125 23-9.066407 27.042969zm0 0"></path><path d="m291.246094 243.054688c1.882812 1.628906 4.214844 2.441406 6.550781 2.441406s4.671875-.8125 6.550781-2.441406c81.589844-70.710938 132.058594-106.496094 132.058594-162.105469 0-43.992188-31.144531-80.449219-74.898438-80.449219-28.734374 0-50.738281 16.5625-64.910156 41.417969-14.140625-24.800781-36.121094-41.417969-64.898437-41.417969-33.496094 0-61.5 21.707031-71.34375 55.296875-1.554688 5.300781 1.484375 10.855469 6.785156 12.410156 5.300781 1.554688 10.855469-1.484375 12.40625-6.785156 7.285156-24.859375 27.753906-40.921875 52.152344-40.921875 28.527343 0 48.539062 25.332031 55.261719 48.917969 1.199218 4.332031 5.144531 7.332031 9.636718 7.332031 4.496094 0 8.4375-3 9.636719-7.332031.136719-.488281 14.027344-48.917969 55.273437-48.917969 31.296876 0 54.898438 25.984375 54.898438 60.449219 0 44.484375-43.484375 76.554687-118.617188 141.335937-45.777343-39.3125-82.140624-66.984375-102.808593-94.054687-3.351563-4.390625-9.625-5.234375-14.015625-1.882813-4.390625 3.351563-5.230469 9.625-1.882813 14.019532 23.296875 30.511718 62.625 59.746093 112.164063 102.6875zm0 0"></path><path d="m169 88.597656c-5.519531 0-10 4.480469-10 10 0 5.519532 4.480469 10 10 10s10-4.480468 10-10c0-5.519531-4.480469-10-10-10zm0 0"></path></svg>
                            DONATE
                        </a>
                        <button className="show_menu" onClick={() => setShowMenu(!showMenu)}>
                            <svg enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" id="fi_5259008"><path d="m128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6h-332.8c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128h-460.8c-14.138 0-25.6 11.463-25.6 25.6 0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6h-230.4c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"></path></svg>
                        </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;