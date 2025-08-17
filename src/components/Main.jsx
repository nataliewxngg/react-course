function Main() {
    return (
        <main className="px-[25px]">
            <h1 className="text-[2.4rem] font-bold py-[30px]">Fun facts about React</h1>
            <ul className="list-disc pl-10 text-1 max-w-[400px] [&>li::marker]:text-[#61dafb] [&>li::marker]:text-[1.5rem] [&>li]:leading-[19px] [&>li]:py-[10px]">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default Main;