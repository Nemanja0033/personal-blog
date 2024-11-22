export default function Heading(){
    return(
        <div className="flex-row w-full mt-20">
            <div className="flex md:justify-start justify-center mb-6">
                <h1 className="font-semibold text-2xl">Welcome to my blog!</h1>
            </div>
            <div className="flex md:justify-start justify-center mb-6">
                <p>I'm Nemanja, an <b>Forntend Web Developer</b> from Serbia.</p>
            </div>
            <div className="flex md:justify-start justify-center mb-6">
                <p>Thanks for visiting my website.</p>
            </div>
            <div className="flex md:justify-start justify-center">
                <p>On this site you can read my articles, follow <b>news and projects from programming.</b></p>
            </div>
        </div>
    )
}