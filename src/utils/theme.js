export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                    main: "#000000",
                },
                secondary: {
                    main: "#7e5abd",
                },
                loading: "#D3D3D3",
                cardBg: "#F1F1F1",
                button: {
                    selected:{
                        border:"#000000",
                        background:"#00001F11"
                    },
                    unselected:{
                        border:"#00001F44",
                        background:""
                    }
                }
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#fff",
                },
                secondary: {
                    main: "#673ab7",
                },
                background: {
                    paper: "#0d1118",
                    default: "#0d1118",
                },
                loading: "#434549",
                cardBg: "#161c22",
                button: {
                    selected:{
                        border:"#ffffff",
                        background:"#ffffff11"
                    },
                    unselected:{
                        border:"",
                        background:""
                    }
                }
            }),
    },
});
