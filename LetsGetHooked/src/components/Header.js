const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src="https://static.wixstatic.com/media/f49831_c088c1f33a1f4ec08509f355f9627fde~mv2.jpg/v1/fill/w_912,h_912,al_c,q_85/file.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
 };

 export default Header;