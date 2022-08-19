import {useSelector} from "react-redux";
import {useEffect} from "react";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const UserDetails = () => {
    const user = useSelector((state) => state.user);
    const userAbout = user.userAbout;

    useEffect(() => {
        // console.log(userAbout);
    }, []);

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-around',
                width: '100%',
                padding: '50px 500px 50px 50px'
            }}>

                <Avatar src={userAbout.avatar_url}
                        sx={{height: "300px", width: "300px", outline: "3px solid #fff",}}/>

                <Box sx={{width: '35%', display: 'flex', flexDirection:'column', justifyContent:'center'}}>
                    <Typography variant="h4" sx={{textAlign: 'center'}}>
                        {userAbout.name}
                    </Typography>
                    <Typography variant="h6" sx={{textAlign: 'center', color: '#ffffff77'}}>
                        {'@' + userAbout.login}
                    </Typography>

                    <Typography
                        level="h6"
                        sx={{
                            maxWidth: "100%",
                            marginTop: "1em",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: 'justify',
                            textIndent: '25px'
                        }}
                    >
                        {userAbout.bio}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};
export default UserDetails;
