import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import '../style/form/ReactHookForm.css'

const schema = z.object({
  name: z.string().nonempty({ message: '必須項目です' }),
  phoneNumber: z.string().regex(/^\d{11}$/, { message: '電話番号は必須です' }),
  email: z.string().min(1, { message: '必須項目です' }),
  postCode: z.string().regex(/^\d{7}$/, { message: '必須項目です' }),
  prefecture: z.string().min(1, { message: '必須項目です' }),
  address: z.string().min(1, { message: '必須項目です' }),
})

type Schema = z.infer<typeof schema>

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))} className="reactHookFormContainer">
      <input type="text" {...register('name')} />
      {errors.name?.message && <p>{errors.name?.message}</p>}
      <input type="text" {...register('phoneNumber')} />
      {errors.phoneNumber?.message && <p>{errors.phoneNumber?.message}</p>}
      <input type="email" {...register('email')} />
      {errors.email?.message && <p>{errors.email?.message}</p>}
      <input type="text" {...register('postCode')} />
      {errors.postCode?.message && <p>{errors.postCode?.message}</p>}
      <input type="text" {...register('prefecture')} />
      {errors.prefecture?.message && <p>{errors.prefecture?.message}</p>}
      <input type="text" {...register('address')} />
      {errors.address?.message && <p>{errors.address?.message}</p>}
      <input type="submit" />
    </form>
  )
}
