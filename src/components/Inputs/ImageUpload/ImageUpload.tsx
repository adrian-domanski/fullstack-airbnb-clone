import { useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { TbPhotoPlus } from 'react-icons/tb'
import Image from 'next/image'

import * as Styled from './ImageUpload.styles'

declare global {
  var cloudinary: any
}

const uploadPreset = 'ywn77y59'

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url)
    },
    [onChange],
  )

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <Styled.Wrapper onClick={() => open?.()}>
            <TbPhotoPlus size={50} />
            <Styled.Upload>Click to upload</Styled.Upload>
            {value && (
              <Styled.ImageWrapper>
                <Image
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                  alt="House"
                />
              </Styled.ImageWrapper>
            )}
          </Styled.Wrapper>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload
