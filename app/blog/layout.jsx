export default function BlogLayout({ children }){
    return(
        <div className="flex">
            <div>
                Sidebar
            </div>
            <div>{children}</div>
        </div>
    )
}