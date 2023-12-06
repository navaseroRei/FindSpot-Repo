import React from 'react'
import { useModal } from '../common/context/myContext'
import AuthModal from './AuthModal'

const ModalLookup ={
    AuthModal: AuthModal
}

const ModalManager = () => {

const { modal, closeModal} = useModal()
  if (!modal) return null
  const Modal = ModalLookup[modal]
  return <Modal onClose={closeModal}/>
}

export default ModalManager