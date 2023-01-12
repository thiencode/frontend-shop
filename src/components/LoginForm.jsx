import { LockClosedIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function login() {
        let headersList = {
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "username": username,
            "password": password
        });

        let reqOptions = {
            url: "http://localhost:8080/api/v1/auth/login",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }

        try {
            let response = await axios.request(reqOptions);
            console.log(response.data.accessToken);
            localStorage.setItem("accessToken", response.data.accessToken);
        } catch (e) {
            console.log("Fail!!!!")
        }


    }


    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-36 w-auto"
                        src="/images/logos/09ff2e0fefc3379d6ed24.jpg"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="#!" className="font-medium text-indigo-600 hover:text-indigo-500">
                            start your 14-day free trial
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" >
                    {/* action="http://localhost:8080/do-login" method="POST" */}
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="username"
                                type="text"
                                autoComplete="text"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link to="#!" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={login}
                        >
                            {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span> */}
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// export default class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "username": "",
//             "password": ""
//         }
//     }

//     setParams = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//     }

//     // login = async () => {
//     //     let headersList = {
//     //         "Accept": "*/*",
//     //         "Content-Type": "application/json"
//     //     }

//     //     let bodyContent = JSON.stringify({
//     //         "username": "admin",
//     //         "password": "admin"
//     //     });

//     //     let response = await fetch("localhost:8080/api/v1/auth/login", {
//     //         method: "POST",
//     //         body: bodyContent,
//     //         headers: headersList
//     //     });

//     //     let data = await response.text();
//     //     console.log(data);
//     // }

//     async componentDidMount() {
//         let headersList = {
//             "Content-Type": "application/json"
//         }

//         // let bodyContent = JSON.stringify({
//         //     "username": this.state.username,
//         //     "password": this.state.password
//         // });

//         let bodyContent = new URLSearchParams();
//         bodyContent.append("username", this.state.username);
//         bodyContent.append("password", this.state.password)

//         let reqOptions = {
//             url: "http://localhost:8080/api/v1/auth/login",
//             method: "POST",
//             headers: headersList,
//             data: bodyContent,
//         }

//         let response = await axios.request(reqOptions);
//         console.log(response.data);
//     }



//     render() {
//         return (
//             <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//                 <div className="w-full max-w-md space-y-8">
//                     <div>
//                         <img
//                             className="mx-auto h-36 w-auto"
//                             src="/images/logos/09ff2e0fefc3379d6ed24.jpg"
//                             alt="Your Company"
//                         />
//                         <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//                             Sign in to your account
//                         </h2>
//                         <p className="mt-2 text-center text-sm text-gray-600">
//                             Or{' '}
//                             <a href="#!" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                 start your 14-day free trial
//                             </a>
//                         </p>
//                     </div>
//                     <form className="mt-8 space-y-6" action="http://localhost:8080/api/v1/auth/login" method="POST">
//                         <input type="hidden" name="remember" defaultValue="true" />
//                         <div className="-space-y-px rounded-md shadow-sm">
//                             <div>
//                                 <label htmlFor="email-address" className="sr-only">
//                                     Username
//                                 </label>
//                                 <input
//                                     id="email-address"
//                                     name="username"
//                                     type="text"
//                                     autoComplete="text"
//                                     required
//                                     className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                     placeholder="Username"
//                                     onChange={this.setParams}
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="sr-only">
//                                     Password
//                                 </label>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     autoComplete="current-password"
//                                     required
//                                     className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                     placeholder="Password"
//                                     onChange={this.setParams}
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <input
//                                     id="remember-me"
//                                     name="remember-me"
//                                     type="checkbox"
//                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                 />
//                                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                                     Remember me
//                                 </label>
//                             </div>

//                             <div className="text-sm">
//                                 <Link to={"#!"} className="font-medium text-indigo-600 hover:text-indigo-500">
//                                     Forgot your password?
//                                 </Link>
//                             </div>
//                         </div>

//                         <div>
//                             <button
//                                 type="button"
//                                 className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                                 onClick={this.componentDidMount}
//                             >
//                                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                                     <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
//                                 </span>
//                                 Sign in
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

