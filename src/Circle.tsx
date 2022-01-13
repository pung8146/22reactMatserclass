import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor:string;
}

const Container = styled.div<ContainerProps>`
    width:200px;
    height:200px;
    background-color: ${(props) =>props.bgColor};
    border-radius:100px;
    border:3px solid ${(props) => props.borderColor};
    `;

interface CircleProps {
    bgColor:string;
    borderColor?:string;
    text?:string;
}

function Circle({bgColor, borderColor, text="default text"}:CircleProps) {
    const [value , setValue] = useState<string|number>("");
    setValue(2)
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? "black"}> 
            {text}
        </Container>
        );
    }
    

export default Circle;