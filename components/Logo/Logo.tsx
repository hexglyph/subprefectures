//Logo component
import { DesignLogo } from '../Icons'
import Image from 'next/image'

const LogoComponent = () => {
    return (
        <div id="logo" className={`w-64 h-auto flex p-2`}>
            <img src="/locais/logo.png" alt="Logo" className='w-40' />
        </div>
    )
}

export default LogoComponent