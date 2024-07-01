import { styled } from "@mui/material";
import { ReactNode } from "react";
interface StyledButtonProps{
    children: ReactNode,
    display?:string,
    onClick: ()=>void
}
const StyleButton : React.FC<StyledButtonProps> = ({display="inline-flex",children,onClick=() => {}}) => {
    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor:"transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius:"3px",
        padding:"5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display:display,
        alignItems:"center",
        justifyContent:"center",
        gap:"10px",
        '&:hover':{
             backgroundColor: theme.palette.secondary.light
            }
     
      }));
  return (
    <>
     <StyledButton onClick={onClick} >{children}</StyledButton>
     
 
    </>
  );
};

export default StyleButton;
