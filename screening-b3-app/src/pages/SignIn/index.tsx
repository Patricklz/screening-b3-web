/* eslint-disable react/function-component-definition */
import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="app" />
            <form>
                <h1>Faça seu logon</h1>

                <Input name="email" icon={FiMail} placeholder="E-mail" />

                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Password"
                />

                <Button type="submit">Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="login">
                <FiLogIn />
                Criar conta
            </a>
        </Content>

        <Background />
    </Container>
);

export default SignIn;