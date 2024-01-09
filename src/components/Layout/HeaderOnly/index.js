import HeaderOnly from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <HeaderOnly />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
