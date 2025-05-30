

export const handleClick = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    setIsOpen(!isOpen);
}