import TPrimeLogo from "../../assets/tprime.png";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={TPrimeLogo} alt="TPrime Logo" />
        <button>sair</button>
      </div>
    </StyledHeader>
  );
};
