interface TagProps{
    label:string
}

export function Tag({label}: TagProps){
    return(
        <span className="font-mono text-xs uppercase tracking-wide rounded-full border border-bone/20 px-3 py-1 ">
            {label}
        </span>
    )
}