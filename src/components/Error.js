import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();
    return(
        <div className="flex flex-col items-center justify-center h-[100vh] font-semibold text-lg bg-gradient-to-tr from-[#d16ba5] via-[#c777b9] via-[#ba83ca] via-[#aa8fd8] via-[#9a9ae1] via-[#8aa7ec] via-[#79b3f4] via-[#69bff8] via-[#52cffe] via-[#41dfff] via-[#46eefa]  to[#5ffbf1]">
            <h1>Oops!!!</h1>
            <h2>Something Went Wrong...</h2>
            <h3>{error.status} : {error.statusText}</h3>
        </div>
    )
}
export default Error;