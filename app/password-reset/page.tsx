'use client';
import {useTransition} from "react";
import React from 'react';
import {useRouter} from "next/navigation";
import {showToast} from "@/components/ui-lib";
import {doPasswordReset} from "./actions";
import {UserModel, UserState, useUserStore} from "@/store/user";
import Image from 'next/image'
import logoPng from "../apple-touch-icon.png"


export default function Login() {
    const {setUser}: UserState = useUserStore();
    let [isPending, startTransition] = useTransition()
    const router = useRouter();

    const doAction = async (formData: FormData) => startTransition(() => {
        doPasswordReset(formData).then(res => {
            showToast('Your password has been reset. please get your new password in your email.')
            setTimeout(() => {
                router.push('/login')
            }, 100)
        }).catch(e => {
            showToast('reset password failed :' + e?.message)
        });
    })


    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">

            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <Image width={36} height={36} className="w-8 h-8 mr-2" src={logoPng} alt="logo"/>
                        MojoAI
                    </a>
                    <div
                        className=" bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Reset your password
                            </h1>
                            <form className="space-y-4 md:space-y-3 w-96 " action={doAction}>
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                        email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                                                        w-full

                                    focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                    dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400"
                                           placeholder="name@company.com" required/>
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                           className="bg-gray-50 border border-gray-300
                                                                        w-full

                                    text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600
                                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400"
                                           required/>
                                </div>
                                <div>
                                    <label htmlFor="confirm_password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                        password</label>
                                    <input type="confirm_password" name="confirm_password" id="confirm_password"
                                           placeholder="••••••••" className="bg-gray-50 border
                                                                        w-full

                                    border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700
                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400"
                                           required/>
                                </div>


                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700
                                        dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                               required/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="newsletter"
                                               className="font-light text-gray-500 dark:text-gray-300">I accept the <a
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>

                                <button type="submit" className=" text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
                                                                    w-full

                                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Create
                                    an account
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

