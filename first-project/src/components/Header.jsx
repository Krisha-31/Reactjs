const style = {
    nav: {
        padding: "20px",
        display: "flex",
        alignItems: "center",
        gap: "0px",
        borderBottom: "2px solid pink",
        boxSizing: "border-box",
        backgroundColor:"pink"
    },

    logo: {
        display: "flex",
        alignItems: "center",
    },

    menu: {
        display: "flex",
        gap: "30px",
        alignItems: "center",
        fontSize: "18px",
        listStyle: "none",
        fontFamily: "cursive",
        margin: 0,
        padding: 0,
        justifyContent: "space-between"
    },

    image: {
        width: "50px",
        height: "50px",
        objectFit: "contain",
    },

    li:{
        paddingLeft:"450px"
    },

    li1:{
        paddingLeft:"25px"
    }
};

function Header() {
    return (
        <nav style={style.nav}>
            <div style={style.logo}>
                {/* <img
                    style={style.image}
                    src="https://tse1.mm.bing.net/th/id/OIP.U2OTodWAydhzfdeAM9LuBAHaFg?r=0&pid=Api&P=0&h=180"
                    alt="Logo"
                /> */}
            </div>

            <div>
                <ul style={style.menu}>
                    <li style={style.li1}>Home</li>
                    <li style={style.li}>About Us</li>
                    <li style={style.li}>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
