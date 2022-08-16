import {atom, useRecoilState, useRecoilValue} from 'recoil'

const darkModeState = atom({ key: 'darkMode', default: false})

export const Atoms = () => {

    return (
     <>
        <div>Atoms</div>
        <div><DarkModeSwitch /></div>
        <div><ToggleButton /></div>
    </>

)}


const ToggleButton = () => {
    const darkMode = useRecoilValue(darkModeState)
    return (
        <button style={{backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black'}}>Button</button>
    )
}

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)
    return (
        <>
        <label htmlFor="darkmodeInput">
            <input type="checkbox" checked={darkMode} onChange={(event) => {setDarkMode(event.currentTarget.checked)}} />
        </label>
        </>
    )
}
