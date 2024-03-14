import { BeakerIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Alert({message}){

    return(
        <>
            <div id="alert" className="flex gap-2 rounded-xl py-4 px-8 mb-8 mx-auto bg-green-100 transition duration-700 ease-in-out">
                <div className="w-7 text-green-500"><CheckCircleIcon /></div>
                <div className="">{message}</div>
            </div>
        </>
    )
}