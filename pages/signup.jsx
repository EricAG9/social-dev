import styled from "styled-components"
import Link from "next/link"

import ImageWithSpace from "../src/componentes/layout/imageWithSpace"
import H1 from "../src/componentes/tipografia/H1"
import H2 from "../src/componentes/tipografia/H2"
import H4 from "../src/componentes/tipografia/H4"
import Button from "../src/componentes/inputs/Button"
import Input from "../src/componentes/inputs/Input"
import {useForm} from 'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'
import { signupSchema } from "../modules/user/user.schema"

const FormContainer = styled.div`
    margin-top: 60px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px;
    gap: 20px;
`

const Text = styled.p`
    text-align: center;
`

function SignupPage () {
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(signupSchema)
    })

    const handleForm = (data) => {
        console.log(data)
    }

    return (
        <ImageWithSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, está aqui!</H4>
            <FormContainer>
                <H2>Crie sua Conta</H2>
                <Form onSubmit={handleSubmit(handleForm)}>
                    <Input label="Nome" name='firstName' control={control} />
                    <Input label="Sobrenome" name='lastName' control={control}/>
                    <Input label="Usuário" name='user' control={control}/>
                    <Input label="Email" type="email" name='email' control={control}/>
                    <Input label="Senha" type="password" name='password' control={control}/>
                    <Button type='submit' disabled={Object.keys(errors).length > 0}>Cadastrar</Button>
                </Form>
                <Text>Já possui uma conta?<Link href="/login">Faça seu Login</Link></Text>
            </FormContainer>
        </ImageWithSpace>
    )
}

export default SignupPage