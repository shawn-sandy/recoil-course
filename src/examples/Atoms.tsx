import { Button } from "@chakra-ui/react"

export const Atoms = () => {
    
    return (
     <>
        <div>Atoms</div>
        <div><DarkModeSwitch /></div>
        <div><ToggleButton /></div>
    </>
    
)}


const ToggleButton = () => {
    return (
        <button>Button</button>
    )
}

const DarkModeSwitch = () => {
    return (
        <>
        <label htmlFor="darkmodeInput">
            <input type="checkbox" />
        </label>
        </>
    )
}