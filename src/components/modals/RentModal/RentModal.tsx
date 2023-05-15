import axios from 'axios'
import { toast } from 'react-hot-toast'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import useRentModal from '../../../hooks/useRentModal'
import Heading from '../../Heading/Heading'
import Input from '../../Inputs/Input/Input'
import Modal from '../Modal/Modal'
import { categories } from '../../Navbar/Categories/Categories'
import CategoryInput from '../../Inputs/CategoryInput/CategoryInput'
import CountrySelect from '../../Inputs/CountrySelect/CountrySelect'

import * as Styled from './RentModal.styles'
import Counter from '../../Inputs/Counter/Counter'

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const router = useRouter()
  const rentModal = useRentModal()

  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(STEPS.CATEGORY)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    },
  })

  const location = watch('location')
  const category = watch('category')
  const guestCount = watch('guestCount')
  const roomCount = watch('roomCount')
  const bathroomCount = watch('bathroomCount')
  const imageSrc = watch('imageSrc')

  const Map = useMemo(
    () => dynamic(() => import('../../Map/Map'), { ssr: false }),
    [location],
  )

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }

  const onChangeStep = (dir: -1 | 1) => setStep(value => value + dir)

  const onSubmit: SubmitHandler<FieldValues> = data => {
    if (step !== STEPS.PRICE) {
      return onChangeStep(1)
    }

    setIsLoading(true)

    axios
      .post('/api/listings', data)
      .then(() => {
        toast.success('Listing created!')
        router.refresh()
        reset()
        setStep(STEPS.CATEGORY)
        rentModal.onClose()
      })
      .catch(() => {
        toast.error('Something went wrong.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create'
    }

    return 'Next'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Back'
  }, [step])

  let bodyContent = (
    <Styled.BodyContent>
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <Styled.CategoriesWrapper>
        {categories.map(item => (
          <Styled.CategoryInputWrapper key={item.label}>
            <CategoryInput
              onClick={category => setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </Styled.CategoryInputWrapper>
        ))}
      </Styled.CategoriesWrapper>
    </Styled.BodyContent>
  )

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <Styled.BodyContent>
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect
          value={location}
          onChange={value => setCustomValue('location', value)}
        />
        <Map center={location?.latlng} />
      </Styled.BodyContent>
    )
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <Styled.BodyContent>
        <Heading
          title="Share some basics about your place"
          subtitle="What amenities do you have?"
        />
        <Counter
          onChange={value => setCustomValue('guestCount', value)}
          value={guestCount}
          title="Guests"
          subtitle="How many guests do you allow?"
        />
        <hr />
        <Counter
          onChange={value => setCustomValue('roomCount', value)}
          value={roomCount}
          title="Rooms"
          subtitle="How many rooms do you have?"
        />
        <hr />
        <Counter
          onChange={value => setCustomValue('bathroomCount', value)}
          value={bathroomCount}
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
        />
      </Styled.BodyContent>
    )
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <Styled.BodyContent>
        <Heading
          title="Add a photo of your place"
          subtitle="Show guests what your place looks like!"
        />
        {/* <ImageUpload
          onChange={(value) => setCustomValue('imageSrc', value)}
          value={imageSrc}
        /> */}
      </Styled.BodyContent>
    )
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <Styled.BodyContent>
        <Heading
          title="How would you describe your place?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="title"
          label="Title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </Styled.BodyContent>
    )
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <Styled.BodyContent>
        <Heading
          title="Now, set your price"
          subtitle="How much do you charge per night?"
        />
        <Input
          id="price"
          label="Price"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </Styled.BodyContent>
    )
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title="Airbnb your home!"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={
        step === STEPS.CATEGORY ? undefined : () => onChangeStep(-1)
      }
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  )
}

export default RentModal
