import './LanguageBar.css'

export const LanguagesBar = ({languages, sum, colors}) => {
    return Object.keys(languages).length>0 &&
        <div className={"language-bar-component-container"}>
            <div className={"language-bar-title"}>Languages</div>
            <div className={"language-bar-container"}>
                {Object.keys(languages).map(language =>
                    <div className={"language-segment"} style={{width:`${languages[language]/sum*100+3}%`, backgroundColor: colors[language].color}}>
                    </div>)}
            </div>
            <div className={"language-bar-percentages-container"}>
                {Object.keys(languages).map(language =>
                    <div className={"language-bar-percentages-row"}>
                        <div className={"language-circle"} style={{backgroundColor: colors[language].color}}/>
                        <div className={"language-name"}> { language } </div>
                        <div className={"language-percentage"}>
                            { `${(languages[language]/sum*100).toFixed(1)}%` }
                        </div>
                    </div>)}
            </div>
        </div>
}

export default LanguagesBar