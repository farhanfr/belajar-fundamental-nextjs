import {roboto} from '@/app/fonts'

export default function Heading({children}) {
    return(
        <span className="text-2xl font-bold font-roboto">{children}</span>
    )
    
}