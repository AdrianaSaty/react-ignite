import { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="saty money" />
                <button typeof="button" onClick={onOpenNewTransactionModal}>
                    New Transaction
                </button>
            </Content>
        </Container>
    )
}