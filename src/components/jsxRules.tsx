export default function JSXRules() {
    const currentDate = new Date()
    return (
        <>
            <h2>JSX Rules</h2>

            <main>
                <p>JSX must return a single parent element</p>
                <p>JSX elements must be properly closed</p>
                <p>JSX attributes are written using camelCase </p>
            </main>
            <footer>
                @{currentDate.getFullYear()}
            </footer>
        </>
    )

}