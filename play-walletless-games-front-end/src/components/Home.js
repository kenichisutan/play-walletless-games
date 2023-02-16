import Controller from './../images/controller.png'

const Home = () => {
    return(
        <>
        <div className="text-center">
            <h2>Find a game to play today!</h2>
            <hr />
            <img src={Controller} alt="controller"></img>
        </div>
        </>
    )
}

export default Home;