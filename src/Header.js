import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className="header">
            <div className='header__left'>
                <span>ADN</span>

                <div className='header__search'>
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header-right">

            </div>

        </div>
    )
}

export default Header;