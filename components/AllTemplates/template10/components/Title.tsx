import { DM_Serif_Display, Inter} from "next/font/google"

const dmserif = DM_Serif_Display({weight: "400", subsets: ["latin"]});
const inter = Inter({subsets: ["latin"]})

const Title = (props: {children: React.ReactNode; className?: string}) => {
    return <div className={`${inter.className} ${props.className}`}>{props.children}</div>
}

export default Title;