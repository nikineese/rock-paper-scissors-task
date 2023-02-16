import {Wrapper, LabelWrapper, InputWrapper} from "./styled";

export const Input = ({ title, value, ...rest }: { title: string, value: any, [key: string]: any }) => {
    const idForInput = title.toLowerCase()
    return (
        <Wrapper>
            <LabelWrapper htmlFor={idForInput}>{title}</LabelWrapper>
            <InputWrapper id={idForInput} value={value} {...rest}/>
        </Wrapper>
    )
}