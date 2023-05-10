import React, { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import * as Styled from './Modal.styles'
import Button from '../../Button/Button'
import tw from 'twin.macro'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryActionLabel?: string
}

const Modal: React.FC<ModalProps> = ({
  secondaryAction,
  onClose,
  onSubmit,
  isOpen,
  actionLabel,
  title,
  body,
  disabled,
  footer,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) return

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) return

    onSubmit()
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return

    secondaryAction()
  }, [secondaryAction])

  if (!isOpen) {
    return null
  }

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Box showModal={showModal as boolean}>
          <Styled.Header>
            <Styled.HeaderContent>
              <Styled.Button onClick={handleClose}>
                <IoMdClose size={18} />
              </Styled.Button>
              <Styled.Title>{title}</Styled.Title>
            </Styled.HeaderContent>
            {/*body*/}
            <Styled.Body>{body}</Styled.Body>
            {/*footer*/}
            <Styled.Footer>
              <Styled.FooterContent>
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                    outline
                  />
                )}
                <Button
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
              </Styled.FooterContent>
              {footer}
            </Styled.Footer>
          </Styled.Header>
        </Styled.Box>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default Modal
