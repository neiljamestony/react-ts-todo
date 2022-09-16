import { FC } from 'react'

interface Props {
    title?: string,
    fc?: () => void
}

const Header: FC<Props> = ({ title }) => {
    return <div className="header">{title}</div>
}

export default Header;