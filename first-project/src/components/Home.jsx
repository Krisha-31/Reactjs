import "./styles/home.css";

function Home({ mydata }) {
    return (
        <section>
            <h1>What Do You Want To Read?</h1>
            <div> {
                mydata.map((mydata, index) => {
                    return (<main key={index}>
                        <img src={mydata.Image} alt="" />

                        <h2> {mydata.BookName}</h2>
                        <h4> {mydata.Price}</h4>

                    </main>)
                })
            }

            </div>
            </section>
    )
}

export default Home;