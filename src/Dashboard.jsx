// my dashboard
function Dashboard({logout}){
    const mySavedName = localStorage.getItem("name")
    return(
        <>
        <h1>im your dashboard {mySavedName}</h1>
        
            <button onClick={logout}>logout</button>
        
        </>
    )



}
export default Dashboard