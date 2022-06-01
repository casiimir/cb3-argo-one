import Navbar from '../Navbar/index'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            { children }

        </div>
    )
}

export default DefaultLayout;